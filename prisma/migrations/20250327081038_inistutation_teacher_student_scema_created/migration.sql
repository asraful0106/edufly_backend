-- CreateTable
CREATE TABLE `Inistutations` (
    `eiin` VARCHAR(191) NOT NULL,
    `name_eng` VARCHAR(191) NOT NULL,
    `name_bng` VARCHAR(191) NOT NULL,
    `founding_date` DATETIME(3) NULL,
    `address` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `proof_of_document` VARCHAR(191) NULL,
    `logo` VARCHAR(191) NULL,
    `type` ENUM('school', 'college', 'school_college', 'madrasha', 'coaching_center', 'primary_school', 'others') NOT NULL DEFAULT 'school',
    `isVarified` BOOLEAN NOT NULL DEFAULT false,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`eiin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teachers` (
    `id` VARCHAR(191) NOT NULL,
    `instutaion_id` VARCHAR(191) NOT NULL,
    `name_eng` VARCHAR(191) NOT NULL,
    `name_bng` VARCHAR(191) NOT NULL,
    `teacher_id` VARCHAR(191) NOT NULL,
    `teacher_enitial` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `religion` ENUM('islam', 'hindu', 'buddhist', 'christian', 'others') NOT NULL DEFAULT 'islam',
    `gender` ENUM('male', 'female', 'others') NOT NULL DEFAULT 'male',
    `date_of_birth` DATETIME(3) NOT NULL,
    `address` VARCHAR(191) NULL,
    `signeture` VARCHAR(191) NULL,
    `position` VARCHAR(191) NULL,
    `blod_group` VARCHAR(191) NULL,
    `role` ENUM('student', 'teacher') NOT NULL DEFAULT 'teacher',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Students` (
    `id` VARCHAR(191) NOT NULL,
    `instutaion_id` VARCHAR(191) NOT NULL,
    `class_role` VARCHAR(191) NOT NULL,
    `name_eng` VARCHAR(191) NOT NULL,
    `name_bng` VARCHAR(191) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `religion` ENUM('islam', 'hindu', 'buddhist', 'christian', 'others') NOT NULL DEFAULT 'islam',
    `gender` ENUM('male', 'female', 'others') NOT NULL DEFAULT 'male',
    `date_of_birth` DATETIME(3) NOT NULL,
    `address` VARCHAR(191) NULL,
    `signeture` VARCHAR(191) NULL,
    `blod_group` VARCHAR(191) NULL,
    `role` ENUM('student', 'teacher') NOT NULL DEFAULT 'student',
    `status` ENUM('current', 'alumni') NOT NULL DEFAULT 'current',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Teachers` ADD CONSTRAINT `Teachers_instutaion_id_fkey` FOREIGN KEY (`instutaion_id`) REFERENCES `Inistutations`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_instutaion_id_fkey` FOREIGN KEY (`instutaion_id`) REFERENCES `Inistutations`(`eiin`) ON DELETE RESTRICT ON UPDATE CASCADE;
