-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_Name_key`(`Name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
