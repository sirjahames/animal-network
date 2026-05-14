/*
  Warnings:

  - You are about to drop the `animal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "animal";

-- CreateTable
CREATE TABLE "animals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "legs" INTEGER NOT NULL,
    "fact" TEXT NOT NULL,
    "likes" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "animals_id_key" ON "animals"("id");
