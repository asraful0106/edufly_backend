/*
  Warnings:

  - The values [school_college] on the enum `Inistutations_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Inistutations` MODIFY `type` ENUM('school', 'college', 'school__college', 'madrasha', 'coaching_center', 'primary_school', 'others') NOT NULL DEFAULT 'school';
