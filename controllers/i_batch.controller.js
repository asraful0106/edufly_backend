import prisma from "../database/db.config.js"

// For getiing all batch code
const getAllBatchCode = async (req, res) => {
    const { institution_id } = req.body;
    if (!institution_id){
        return res.status(400).json({
            success: false,
            message: "Institution Id is required!"
        });
    }

    try {
        const allBatchCode = await prisma.batches.findMany({
            where:{
                institution_id
            }
        });
        if (!allBatchCode) {
            return res.status(404).json({
                message: "No batch Found!"
            });
        }
        res.status(200).json({
            success: "ok",
            message: "successfully retrive all the batch code",
            data: allBatchCode
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal server error."
        });
    }
}
// Cheking Batch code for isUniqe
const isBatchUnique = async (req, res) => {
    const { batch_code, institution_id } = req.body;
    if (!batch_code && !institution_id) {
        return res.status(400).json({
            success: false,
            message: "Batch Code and institution id is Required"
        });
    }

    try {

        const isBatchFind = await prisma.batches.findFirst({
            where: {
                institution_id,
                batch_code
            }
        });
        console.log(isBatchFind);
        if (isBatchFind) {
            return res.status(200).json({
                success: true,
                message: "Duplicate Batch Code.",
                bCode_exist: true
            });
        }
        res.status(200).json({
            success: true,
            message: "No duplicate found.",
            bCode_exist: false
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Internal server error.",
            err
        });
    }
}

// Create new Batch
const createNewBatch = async (req, res) => {
    const { institution_id, batch_code, starting_date, ending_date } = req.body;
    if (!institution_id && !batch_code) {
        return res.status(400).json({
            success: false,
            message: "All field is required"
        })
    }
    try {
        const isInstitutionExist = await prisma.institutions.findUnique({
            where: {
                eiin: institution_id
            }
        });

        if (!isInstitutionExist) {
            return res.status(404).json({
                success: true,
                message: "Institution not found!"
            });
        }

        // if (!starting_date || !ending_date) {

        //     const newBatch = prisma.batches.create({
        //         data: {
        //             institution_id,
        //             batch_code
        //         }
        //     });
        //     return res.status(201).json({
        //         success: true,
        //         message: "Successfully batch created.",
        //         data: newBatch
        //     });
        // }
        const newBatch = await prisma.batches.create({
            data: {
                institution_id,
                batch_code,
                starting_date,
                ending_date
            }
        });
        res.status(201).json({
            success: true,
            message: "Successfully batch created.",
            data: newBatch
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            message: "Internal server error.",
            err
        });
    }
}

export const iBatchController = {
    getAllBatchCode,
    isBatchUnique,
    createNewBatch
}