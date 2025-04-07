-- CreateTable
CREATE TABLE `Parents` (
    `id` VARCHAR(191) NOT NULL,
    `institution_id` VARCHAR(191) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,
    `father_name` VARCHAR(191) NULL,
    `father_phone` VARCHAR(191) NULL,
    `father_email` VARCHAR(191) NULL,
    `father_id_number` VARCHAR(191) NULL,
    `father_occupotion` VARCHAR(191) NULL,
    `mother_name` VARCHAR(191) NULL,
    `mother_phone` VARCHAR(191) NULL,
    `mother_email` VARCHAR(191) NULL,
    `mother_id_number` VARCHAR(191) NULL,
    `mother_occupotion` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Parents` ADD CONSTRAINT `Parents_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Parents` ADD CONSTRAINT `Parents_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
