// src/controllers/auth.controller.js
import prisma from '../database/db.config.js';
import bcrypt from 'bcryptjs';
import { signToken } from '../utils/jwt.js';

function setCookie(res, token) {
    const isProd = process.env.NODE_ENV === 'production';
    res.cookie(process.env.COOKIE_NAME, token, {
        httpOnly: true,
        secure: isProd,
        sameSite: isProd ? 'None' : 'Lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: '/',
    });
}

export const authController = {
    // POST /api/auth/login { role: 'institution'|'teacher'|'student', email, password }
    login: async (req, res) => {
        const { role, email, password } = req.body || {};
        if (!role || !email || !password) {
            return res.status(400).json({ message: 'role, email, password required' });
        }

        let record;
        let institution_eiin = null;
        let teacher_id = null;
        let student_id = null;

        if (role === 'institution') {
            record = await prisma.institutions.findUnique({ where: { email } });
            if (!record) return res.status(401).json({ message: 'Invalid credentials' });

            // If you hash passwords later, switch to bcrypt.compare(password, record.password)
            const ok = password === record.password;
            if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

            institution_eiin = record.eiin; // <-- PRIMARY KEY on Institutions
            const payload = {
                sub: institution_eiin,
                role: 'institution',
                institution_eiin,
            };

            const token = signToken(payload);
            setCookie(res, token);

            return res.json({
                message: 'Logged in',
                profile: {
                    role: 'institution',
                    institution_eiin,          // mandatory for you
                    institution_id: institution_eiin, // backward-compat for existing frontend
                    teacher_id: null,
                    student_id: null,
                },
            });
        }

        if (role === 'teacher') {
            record = await prisma.teachers.findUnique({
                where: { email },
                include: { institution: true },
            });
            if (!record) return res.status(401).json({ message: 'Invalid credentials' });

            const ok = password === record.password;
            if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

            // In Teachers model, FK is institution_id
            institution_eiin = record.institution_id || record.institution?.eiin || null;
            teacher_id = record.id;

            const payload = {
                sub: teacher_id,
                role: 'teacher',
                institution_eiin,
                teacher_id,
            };

            const token = signToken(payload);
            setCookie(res, token);

            return res.json({
                message: 'Logged in',
                profile: {
                    role: 'teacher',
                    institution_eiin,
                    institution_id: institution_eiin, // keep both keys
                    teacher_id,
                    student_id: null,
                },
            });
        }

        if (role === 'student') {
            record = await prisma.students.findUnique({
                where: { email },
                include: { institution: true },
            });
            if (!record) return res.status(401).json({ message: 'Invalid credentials' });

            const ok = password === record.password;
            if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

            // In Students model, FK is institution_id
            institution_eiin = record.institution_id || record.institution?.eiin || null;
            student_id = record.id;

            const payload = {
                sub: student_id,
                role: 'student',
                institution_eiin,
                student_id,
            };

            const token = signToken(payload);
            setCookie(res, token);

            return res.json({
                message: 'Logged in',
                profile: {
                    role: 'student',
                    institution_eiin,
                    institution_id: institution_eiin, // keep both keys
                    teacher_id: null,
                    student_id,
                },
            });
        }

        // Unsupported role
        return res.status(400).json({ message: 'Unsupported role' });
    },

    // POST /api/auth/logout
    logout: async (req, res) => {
        res.clearCookie(process.env.COOKIE_NAME, { path: '/' });
        return res.json({ message: 'Logged out' });
    },

    // GET /api/auth/me  (protected)
    me: async (req, res) => {
        // requireAuth should set req.user (decoded JWT)
        const u = req.user;
        return res.json({
            authenticated: true,
            profile: {
                role: u.role,
                institution_eiin: u.institution_eiin,
                institution_id: u.institution_eiin, // again, keep both
                teacher_id: u.teacher_id || null,
                student_id: u.student_id || null,
            },
        });
    },
};
