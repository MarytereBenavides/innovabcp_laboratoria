-- DropIndex
DROP INDEX "GameSession_game_type_key";

-- AlterTable
ALTER TABLE "GameSession" ADD COLUMN     "score" INTEGER;

-- CreateTable
CREATE TABLE "MiniGame" (
    "game_id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,

    CONSTRAINT "MiniGame_pkey" PRIMARY KEY ("game_id")
);

-- CreateTable
CREATE TABLE "MiniGameQuestion" (
    "question_id" TEXT NOT NULL,
    "game_id" TEXT NOT NULL,
    "text" VARCHAR(500) NOT NULL,

    CONSTRAINT "MiniGameQuestion_pkey" PRIMARY KEY ("question_id")
);

-- CreateTable
CREATE TABLE "MiniGameAnswer" (
    "answer_id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "text" VARCHAR(500) NOT NULL,
    "is_correct" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MiniGameAnswer_pkey" PRIMARY KEY ("answer_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MiniGame_name_key" ON "MiniGame"("name");

-- AddForeignKey
ALTER TABLE "MiniGameQuestion" ADD CONSTRAINT "MiniGameQuestion_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "MiniGame"("game_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MiniGameAnswer" ADD CONSTRAINT "MiniGameAnswer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "MiniGameQuestion"("question_id") ON DELETE CASCADE ON UPDATE CASCADE;
