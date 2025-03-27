/*
  Warnings:

  - The values [USER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `game_type` on the `GameSession` table. All the data in the column will be lost.
  - Made the column `description` on table `Achievement` required. This step will fail if there are existing NULL values in that column.
  - Made the column `icon_url` on table `Achievement` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `game_id` to the `GameSession` table without a default value. This is not possible if the table is not empty.
  - Made the column `score` on table `GameSession` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `MiniGame` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ADMIN', 'PLAYER');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
COMMIT;

-- DropIndex
DROP INDEX "MiniGame_name_key";

-- DropIndex
DROP INDEX "UserAchievement_user_id_achievement_id_key";

-- AlterTable
ALTER TABLE "Achievement" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "icon_url" SET NOT NULL,
ALTER COLUMN "icon_url" SET DATA TYPE TEXT,
ALTER COLUMN "xp_reward" DROP DEFAULT;

-- AlterTable
ALTER TABLE "GameSession" DROP COLUMN "game_type",
ADD COLUMN     "game_id" TEXT NOT NULL,
ALTER COLUMN "earned_xp" DROP DEFAULT,
ALTER COLUMN "earned_coins" DROP DEFAULT,
ALTER COLUMN "score" SET NOT NULL;

-- AlterTable
ALTER TABLE "MiniGame" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "MiniGameAnswer" ALTER COLUMN "text" SET DATA TYPE TEXT,
ALTER COLUMN "is_correct" DROP DEFAULT;

-- AlterTable
ALTER TABLE "MiniGameQuestion" ALTER COLUMN "text" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Progress" ALTER COLUMN "level" DROP DEFAULT,
ALTER COLUMN "coins" DROP DEFAULT,
ALTER COLUMN "total_xp" DROP DEFAULT,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "user_name" SET DATA TYPE TEXT,
ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "password" SET DATA TYPE TEXT,
ALTER COLUMN "avatar_url" SET DATA TYPE TEXT,
ALTER COLUMN "role" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "GameSession_user_id_idx" ON "GameSession"("user_id");

-- CreateIndex
CREATE INDEX "GameSession_game_id_idx" ON "GameSession"("game_id");

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "MiniGame"("game_id") ON DELETE CASCADE ON UPDATE CASCADE;
