import { verifyToken } from '../utils/jwt.js';


export function requireAuth(req, res, next) {
    try {
        const token = req.cookies?.[process.env.COOKIE_NAME];
        if (!token) return res.status(401).json({ message: 'Unauthenticated' });
        const decoded = verifyToken(token);
        req.user = decoded; // { sub, role, institutionId, teacherId?, studentId? }
        next();
    } catch (e) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}


export function requireRole(...roles) {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
}