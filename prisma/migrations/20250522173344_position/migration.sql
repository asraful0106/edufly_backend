/*
  Warnings:

  - Added the required column `postion` to the `Teachers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Teachers` ADD COLUMN `about` VARCHAR(191) NULL,
    ADD COLUMN `postion` VARCHAR(191) NOT NULL;
