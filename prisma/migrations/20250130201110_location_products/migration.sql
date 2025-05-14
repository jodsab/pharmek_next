/*
  Warnings:

  - You are about to drop the `DistributorLocationProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductsToDistributorLocationProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DistributorLocationProduct" DROP CONSTRAINT "DistributorLocationProduct_locationId_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsToDistributorLocationProduct" DROP CONSTRAINT "_ProductsToDistributorLocationProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsToDistributorLocationProduct" DROP CONSTRAINT "_ProductsToDistributorLocationProduct_B_fkey";

-- DropTable
DROP TABLE "DistributorLocationProduct";

-- DropTable
DROP TABLE "_ProductsToDistributorLocationProduct";

-- CreateTable
CREATE TABLE "_ProductsToDistributorLocation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsToDistributorLocation_AB_unique" ON "_ProductsToDistributorLocation"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsToDistributorLocation_B_index" ON "_ProductsToDistributorLocation"("B");

-- AddForeignKey
ALTER TABLE "_ProductsToDistributorLocation" ADD CONSTRAINT "_ProductsToDistributorLocation_A_fkey" FOREIGN KEY ("A") REFERENCES "DistributorLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToDistributorLocation" ADD CONSTRAINT "_ProductsToDistributorLocation_B_fkey" FOREIGN KEY ("B") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
