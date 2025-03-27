/*
  Warnings:

  - The primary key for the `Achievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Achievement` table. All the data in the column will be lost.
  - The primary key for the `GameSession` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `earned_conn` on the `GameSession` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `GameSession` table. All the data in the column will be lost.
  - The primary key for the `Progress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `conn` on the `Progress` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Progress` table. All the data in the column will be lost.
  - You are about to drop the column `total_exp` on the `Progress` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `Progress` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `create_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `user_name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(60)` to `VarChar(50)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - The primary key for the `UserAchievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserAchievement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[game_type]` on the table `GameSession` will be added. If there are existing duplicate values, this will fail.
  - The required column `achievement_id` was added to the `Achievement` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `game_session_id` was added to the `GameSession` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `progress_id` was added to the `Progress` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `user_id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `user_achievement_id` was added to the `UserAchievement` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "GameSession" DROP CONSTRAINT "GameSession_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Progress" DROP CONSTRAINT "Progress_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_achievement_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_user_id_fkey";

-- DropIndex
DROP INDEX "Achievement_name_idx";

-- DropIndex
DROP INDEX "GameSession_played_at_idx";

-- DropIndex
DROP INDEX "GameSession_user_id_idx";

-- DropIndex
DROP INDEX "User_email_idx";

-- AlterTable
ALTER TABLE "Achievement" DROP CONSTRAINT "Achievement_pkey",
DROP COLUMN "id",
ADD COLUMN     "achievement_id" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "icon_url" DROP NOT NULL,
ALTER COLUMN "xp_reward" SET DEFAULT 0,
ADD CONSTRAINT "Achievement_pkey" PRIMARY KEY ("achievement_id");

-- AlterTable
ALTER TABLE "GameSession" DROP CONSTRAINT "GameSession_pkey",
DROP COLUMN "earned_conn",
DROP COLUMN "id",
ADD COLUMN     "earned_coins" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "game_session_id" TEXT NOT NULL,
ALTER COLUMN "earned_xp" SET DEFAULT 0,
ALTER COLUMN "played_at" SET DATA TYPE TIMESTAMP(3),
ADD CONSTRAINT "GameSession_pkey" PRIMARY KEY ("game_session_id");

-- AlterTable
ALTER TABLE "Progress" DROP CONSTRAINT "Progress_pkey",
DROP COLUMN "conn",
DROP COLUMN "id",
DROP COLUMN "total_exp",
DROP COLUMN "update_at",
ADD COLUMN     "coins" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "progress_id" TEXT NOT NULL,
ADD COLUMN     "total_xp" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Progress_pkey" PRIMARY KEY ("progress_id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "create_at",
DROP COLUMN "id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "user_id" TEXT NOT NULL,
ALTER COLUMN "user_name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- AlterTable
ALTER TABLE "UserAchievement" DROP CONSTRAINT "UserAchievement_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_achievement_id" TEXT NOT NULL,
ALTER COLUMN "earned_at" SET DATA TYPE TIMESTAMP(3),
ADD CONSTRAINT "UserAchievement_pkey" PRIMARY KEY ("user_achievement_id");

-- CreateIndex
CREATE UNIQUE INDEX "GameSession_game_type_key" ON "GameSession"("game_type");

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAchievement" ADD CONSTRAINT "UserAchievement_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAchievement" ADD CONSTRAINT "UserAchievement_achievement_id_fkey" FOREIGN KEY ("achievement_id") REFERENCES "Achievement"("achievement_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
