import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    // log: ['query'],// Log all queries
});

export default prisma;