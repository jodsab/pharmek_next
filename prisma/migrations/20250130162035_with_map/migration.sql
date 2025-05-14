/*
  Warnings:

  - You are about to drop the column `productId` on the `DistributorLocationProduct` table. All the data in the column will be lost.
  - You are about to drop the `FavoritesList` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `googleMapUrl` to the `DistributorLocation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DistributorLocationProduct" DROP CONSTRAINT "DistributorLocationProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "FavoritesList" DROP CONSTRAINT "FavoritesList_userId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_favoritesListId_fkey";

-- AlterTable
ALTER TABLE "DistributorLocation" ADD COLUMN     "googleMapUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DistributorLocationProduct" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "distributorLocationProductId" INTEGER;

-- DropTable
DROP TABLE "FavoritesList";

-- CreateTable
CREATE TABLE "_ProductsToDistributorLocationProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsToDistributorLocationProduct_AB_unique" ON "_ProductsToDistributorLocationProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsToDistributorLocationProduct_B_index" ON "_ProductsToDistributorLocationProduct"("B");

-- AddForeignKey
ALTER TABLE "_ProductsToDistributorLocationProduct" ADD CONSTRAINT "_ProductsToDistributorLocationProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "DistributorLocationProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsToDistributorLocationProduct" ADD CONSTRAINT "_ProductsToDistributorLocationProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
