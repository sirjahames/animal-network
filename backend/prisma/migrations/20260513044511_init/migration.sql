-- CreateTable
CREATE TABLE "animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "legs" INTEGER NOT NULL,
    "fact" TEXT NOT NULL,
    "likes" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "animal_id_key" ON "animal"("id");
