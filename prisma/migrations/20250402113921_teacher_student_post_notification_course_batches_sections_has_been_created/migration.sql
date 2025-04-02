/*
  Warnings:

  - You are about to drop the column `blod_group` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `class_role` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `instutaion_id` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `signeture` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `blod_group` on the `Teachers` table. All the data in the column will be lost.
  - You are about to drop the column `instutaion_id` on the `Teachers` table. All the data in the column will be lost.
  - You are about to drop the column `signeture` on the `Teachers` table. All the data in the column will be lost.
  - You are about to drop the column `teacher_enitial` on the `Teachers` table. All the data in the column will be lost.
  - You are about to drop the `Inistutations` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[student_id]` on the table `Students` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Students` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[teacher_id]` on the table `Teachers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Teachers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `class_roll` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `institution_id` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `institution_id` to the `Teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacher_initial` to the `Teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Teachers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Students` DROP FOREIGN KEY `Students_instutaion_id_fkey`;

-- DropForeignKey
ALTER TABLE `Teachers` DROP FOREIGN KEY `Teachers_instutaion_id_fkey`;

-- DropIndex
DROP INDEX `Students_instutaion_id_fkey` ON `Students`;

-- DropIndex
DROP INDEX `Teachers_instutaion_id_fkey` ON `Teachers`;

-- AlterTable
ALTER TABLE `Students` DROP COLUMN `blod_group`,
    DROP COLUMN `class_role`,
    DROP COLUMN `instutaion_id`,
    DROP COLUMN `signeture`,
    ADD COLUMN `batch_id` VARCHAR(191) NULL,
    ADD COLUMN `blood_group` VARCHAR(191) NULL,
    ADD COLUMN `class_roll` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `institution_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `section_id` VARCHAR(191) NULL,
    ADD COLUMN `signature` VARCHAR(191) NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    MODIFY `role` ENUM('student', 'teacher', 'admin') NOT NULL DEFAULT 'student',
    MODIFY `status` ENUM('current', 'alumni', 'dropout', 'rusticated') NOT NULL DEFAULT 'current';

-- AlterTable
ALTER TABLE `Teachers` DROP COLUMN `blod_group`,
    DROP COLUMN `instutaion_id`,
    DROP COLUMN `signeture`,
    DROP COLUMN `teacher_enitial`,
    ADD COLUMN `blood_group` VARCHAR(191) NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `institution_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `signature` VARCHAR(191) NULL,
    ADD COLUMN `teacher_initial` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    MODIFY `role` ENUM('student', 'teacher', 'admin') NOT NULL DEFAULT 'teacher';

-- DropTable
DROP TABLE `Inistutations`;

-- CreateTable
CREATE TABLE `Institutions` (
    `eiin` VARCHAR(191) NOT NULL,
    `name_eng` VARCHAR(191) NOT NULL,
    `name_bng` VARCHAR(191) NOT NULL,
    `founding_date` DATETIME(3) NULL,
    `address` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `document_proof` VARCHAR(191) NULL,
    `logo` VARCHAR(191) NULL,
    `type` ENUM('school', 'college', 'school_college', 'madrasha', 'coaching_center', 'primary_school', 'others') NOT NULL DEFAULT 'school',
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Institutions_email_key`(`email`),
    PRIMARY KEY (`eiin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notifications` (
    `id` VARCHAR(191) NOT NULL,
    `institution_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotificationContent` (
    `id` VARCHAR(191) NOT NULL,
    `notification_id` VARCHAR(191) NOT NULL,
    `content_link` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts` (
    `id` VARCHAR(191) NOT NULL,
    `institution_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Images` (
    `id` VARCHAR(191) NOT NULL,
    `post_id` VARCHAR(191) NOT NULL,
    `image_link` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Courses` (
    `id` VARCHAR(191) NOT NULL,
    `institution_id` VARCHAR(191) NOT NULL,
    `course_code` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Courses_course_code_key`(`course_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Batches` (
    `id` VARCHAR(191) NOT NULL,
    `institution_id` VARCHAR(191) NOT NULL,
    `course_id` VARCHAR(191) NOT NULL,
    `batch_code` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `next_batch` VARCHAR(191) NULL,
    `homeroom_teacher_id` VARCHAR(191) NULL,
    `class_captain_id` VARCHAR(191) NULL,
    `vice_class_captain_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Batches_batch_code_key`(`batch_code`),
    UNIQUE INDEX `Batches_next_batch_key`(`next_batch`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sections` (
    `id` VARCHAR(191) NOT NULL,
    `batch_id` VARCHAR(191) NOT NULL,
    `section_name` VARCHAR(191) NOT NULL,
    `homeroom_teacher_id` VARCHAR(191) NULL,
    `class_captain_id` VARCHAR(191) NULL,
    `vice_class_captain_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Students_student_id_key` ON `Students`(`student_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Students_email_key` ON `Students`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Teachers_teacher_id_key` ON `Teachers`(`teacher_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Teachers_email_key` ON `Teachers`(`email`);

-- AddForeignKey
ALTER TABLE `Notifications` ADD CONSTRAINT `Notifications_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NotificationContent` ADD CONSTRAINT `NotificationContent_notification_id_fkey` FOREIGN KEY (`notification_id`) REFERENCES `Notifications`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Courses` ADD CONSTRAINT `Courses_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Batches` ADD CONSTRAINT `Batches_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `Courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Batches` ADD CONSTRAINT `Batches_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sections` ADD CONSTRAINT `Sections_batch_id_fkey` FOREIGN KEY (`batch_id`) REFERENCES `Batches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Teachers` ADD CONSTRAINT `Teachers_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_batch_id_fkey` FOREIGN KEY (`batch_id`) REFERENCES `Batches`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_section_id_fkey` FOREIGN KEY (`section_id`) REFERENCES `Sections`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
