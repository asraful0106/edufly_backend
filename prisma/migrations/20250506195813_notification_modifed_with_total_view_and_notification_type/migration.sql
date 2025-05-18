/*
  Warnings:

  - Added the required column `notice_type` to the `Notifications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Notifications` ADD COLUMN `notice_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `view` BIGINT NOT NULL DEFAULT 0;
