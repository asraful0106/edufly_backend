/*
  Warnings:

  - You are about to drop the column `class_captain_id` on the `Batches` table. All the data in the column will be lost.
  - You are about to drop the column `course_id` on the `Batches` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Batches` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `Batches` table. All the data in the column will be lost.
  - You are about to drop the column `homeroom_teacher_id` on the `Batches` table. All the data in the column will be lost.
  - You are about to drop the column `next_batch` on the `Batches` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `Batches` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Batches` table. All the data in the column will be lost.
  - You are about to drop the column `vice_class_captain_id` on the `Batches` table. All the data in the column will be lost.
  - You are about to drop the column `batch_id` on the `Sections` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Teachers` table. All the data in the column will be lost.
  - Added the required column `class_id` to the `Sections` table without a default value. This is not possible if the table is not empty.
  - Made the column `batch_id` on table `Students` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Batches` DROP FOREIGN KEY `Batches_course_id_fkey`;

-- DropForeignKey
ALTER TABLE `Sections` DROP FOREIGN KEY `Sections_batch_id_fkey`;

-- DropForeignKey
ALTER TABLE `Students` DROP FOREIGN KEY `Students_batch_id_fkey`;

-- DropIndex
DROP INDEX `Batches_course_id_fkey` ON `Batches`;

-- DropIndex
DROP INDEX `Batches_next_batch_key` ON `Batches`;

-- DropIndex
DROP INDEX `Sections_batch_id_fkey` ON `Sections`;

-- DropIndex
DROP INDEX `Students_batch_id_fkey` ON `Students`;

-- DropIndex
DROP INDEX `Students_student_id_key` ON `Students`;

-- DropIndex
DROP INDEX `Teachers_teacher_id_key` ON `Teachers`;

-- AlterTable
ALTER TABLE `Batches` DROP COLUMN `class_captain_id`,
    DROP COLUMN `course_id`,
    DROP COLUMN `description`,
    DROP COLUMN `end_date`,
    DROP COLUMN `homeroom_teacher_id`,
    DROP COLUMN `next_batch`,
    DROP COLUMN `start_date`,
    DROP COLUMN `title`,
    DROP COLUMN `vice_class_captain_id`,
    ADD COLUMN `ending_date` DATETIME(3) NULL,
    ADD COLUMN `starting_date` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Sections` DROP COLUMN `batch_id`,
    ADD COLUMN `class_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Students` DROP COLUMN `address`,
    ADD COLUMN `class_id` VARCHAR(191) NULL,
    ADD COLUMN `fingerprint` JSON NULL,
    ADD COLUMN `parmanent_adress` VARCHAR(191) NULL,
    ADD COLUMN `present_adress` VARCHAR(191) NULL,
    MODIFY `batch_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Teachers` DROP COLUMN `address`,
    ADD COLUMN `fingerprint` JSON NULL,
    ADD COLUMN `parmanent_adress` VARCHAR(191) NULL,
    ADD COLUMN `present_adress` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Classes` (
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

    UNIQUE INDEX `Classes_batch_code_key`(`batch_code`),
    UNIQUE INDEX `Classes_next_batch_key`(`next_batch`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CourseMarkSegments` (
    `id` VARCHAR(191) NOT NULL,
    `course_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `max_marks` DOUBLE NOT NULL,
    `description` VARCHAR(191) NULL,
    `isMainResult` BOOLEAN NOT NULL DEFAULT true,
    `isAveraged` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExamTypes` (
    `id` VARCHAR(191) NOT NULL,
    `institution_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Results` (
    `id` VARCHAR(191) NOT NULL,
    `institution_id` VARCHAR(191) NOT NULL,
    `examTypeId` VARCHAR(191) NOT NULL,
    `course_id` VARCHAR(191) NULL,
    `section_id` VARCHAR(191) NULL,
    `student_id` VARCHAR(191) NOT NULL,
    `teacher_id` VARCHAR(191) NOT NULL,
    `mark_segment_id` VARCHAR(191) NOT NULL,
    `marks` DOUBLE NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `isPublished` BOOLEAN NOT NULL DEFAULT false,
    `published_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ResultApprovals` (
    `id` VARCHAR(191) NOT NULL,
    `result_id` VARCHAR(191) NOT NULL,
    `institution_id` VARCHAR(191) NOT NULL,
    `status` ENUM('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending',
    `requested_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `approved_at` DATETIME(3) NULL,
    `remarks` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClassTests` (
    `id` VARCHAR(191) NOT NULL,
    `institution_id` VARCHAR(191) NOT NULL,
    `course_id` VARCHAR(191) NOT NULL,
    `class_id` VARCHAR(191) NULL,
    `section_id` VARCHAR(191) NULL,
    `teacher_id` VARCHAR(191) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,
    `full_marks` DOUBLE NOT NULL,
    `marks` DOUBLE NULL,
    `title` VARCHAR(191) NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeacherAttendance` (
    `id` VARCHAR(191) NOT NULL,
    `institution_id` VARCHAR(191) NOT NULL,
    `teacher_id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `status` ENUM('present', 'absent', 'late', 'leave') NOT NULL DEFAULT 'absent',
    `remarks` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentAttendance` (
    `id` VARCHAR(191) NOT NULL,
    `institution_id` VARCHAR(191) NOT NULL,
    `course_id` VARCHAR(191) NULL,
    `class_id` VARCHAR(191) NULL,
    `section_id` VARCHAR(191) NULL,
    `student_id` VARCHAR(191) NOT NULL,
    `teacher_id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `status` ENUM('present', 'absent', 'late', 'leave') NOT NULL DEFAULT 'absent',
    `remarks` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Classes` ADD CONSTRAINT `Classes_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `Courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Classes` ADD CONSTRAINT `Classes_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sections` ADD CONSTRAINT `Sections_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `Classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CourseMarkSegments` ADD CONSTRAINT `CourseMarkSegments_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `Courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExamTypes` ADD CONSTRAINT `ExamTypes_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Results` ADD CONSTRAINT `Results_examTypeId_fkey` FOREIGN KEY (`examTypeId`) REFERENCES `ExamTypes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Results` ADD CONSTRAINT `Results_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Results` ADD CONSTRAINT `Results_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `Courses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Results` ADD CONSTRAINT `Results_section_id_fkey` FOREIGN KEY (`section_id`) REFERENCES `Sections`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Results` ADD CONSTRAINT `Results_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Results` ADD CONSTRAINT `Results_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Results` ADD CONSTRAINT `Results_mark_segment_id_fkey` FOREIGN KEY (`mark_segment_id`) REFERENCES `CourseMarkSegments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ResultApprovals` ADD CONSTRAINT `ResultApprovals_result_id_fkey` FOREIGN KEY (`result_id`) REFERENCES `Results`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ResultApprovals` ADD CONSTRAINT `ResultApprovals_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassTests` ADD CONSTRAINT `ClassTests_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassTests` ADD CONSTRAINT `ClassTests_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `Courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassTests` ADD CONSTRAINT `ClassTests_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `Classes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassTests` ADD CONSTRAINT `ClassTests_section_id_fkey` FOREIGN KEY (`section_id`) REFERENCES `Sections`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassTests` ADD CONSTRAINT `ClassTests_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassTests` ADD CONSTRAINT `ClassTests_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeacherAttendance` ADD CONSTRAINT `TeacherAttendance_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_batch_id_fkey` FOREIGN KEY (`batch_id`) REFERENCES `Batches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `Classes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAttendance` ADD CONSTRAINT `StudentAttendance_institution_id_fkey` FOREIGN KEY (`institution_id`) REFERENCES `Institutions`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAttendance` ADD CONSTRAINT `StudentAttendance_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAttendance` ADD CONSTRAINT `StudentAttendance_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAttendance` ADD CONSTRAINT `StudentAttendance_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `Courses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAttendance` ADD CONSTRAINT `StudentAttendance_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `Classes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAttendance` ADD CONSTRAINT `StudentAttendance_section_id_fkey` FOREIGN KEY (`section_id`) REFERENCES `Sections`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
