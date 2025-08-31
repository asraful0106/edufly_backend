-- CreateTable
CREATE TABLE `ClassCourses` (
    `id` VARCHAR(191) NOT NULL,
    `class_id` VARCHAR(191) NOT NULL,
    `course_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `ClassCourses_class_id_course_id_key`(`class_id`, `course_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SectionCourseTeachers` (
    `id` VARCHAR(191) NOT NULL,
    `section_id` VARCHAR(191) NOT NULL,
    `course_id` VARCHAR(191) NOT NULL,
    `teacher_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `SectionCourseTeachers_section_id_course_id_key`(`section_id`, `course_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ClassCourses` ADD CONSTRAINT `ClassCourses_class_id_fkey` FOREIGN KEY (`class_id`) REFERENCES `Classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassCourses` ADD CONSTRAINT `ClassCourses_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `Courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SectionCourseTeachers` ADD CONSTRAINT `SectionCourseTeachers_section_id_fkey` FOREIGN KEY (`section_id`) REFERENCES `Sections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SectionCourseTeachers` ADD CONSTRAINT `SectionCourseTeachers_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `Courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SectionCourseTeachers` ADD CONSTRAINT `SectionCourseTeachers_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `Teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
