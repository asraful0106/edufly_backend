import prisma from "../database/db.config.js";

const eiiSearch = async (req, res) => {
    const eiiId = req.params.id;
    if (!eiiId) {
        return res.status(400).json({ message: "Invalid id" });
    }
    try {
        const data = await prisma.institutions.findUnique({
            where: {
                eiin: eiiId,
            },
            // include: {
            //     teachers: true,
            //     posts: {
            //         orderBy: { created_at: 'desc' },
            //         take: 15,
            //     },
            //     notifications: {
            //         orderBy: { created_at: 'desc' },
            //         take: 20,
            //     },
            // },
        });
        if (!data) {
            return res.status(404).json({ message: "Eiin is not found" });
        }
        console.log("Data: ", data);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export  {
    eiiSearch
}