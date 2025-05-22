/*
  Warnings:

  - You are about to drop the column `postion` on the `Teachers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Teachers` DROP COLUMN `postion`;

-- CreateTable
CREATE TABLE `TeacherDegree` (
    `id` VARCHAR(191) NOT NULL,
    `teacher_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `passing_year` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeacherAchivment` (
    `id` VARCHAR(191) NOT NULL,
    `teacher_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `year` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TeacherDegree` ADD CONSTRAINT `TeacherDegree_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeacherAchivment` ADD CONSTRAINT `TeacherAchivment_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
