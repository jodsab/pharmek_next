/*
  Warnings:

  - You are about to drop the `_CategoriesToProducts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductsToDistributorLocation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductImages" DROP CONSTRAINT "ProductImages_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsDestacados" DROP CONSTRAINT "ProductsDestacados_productsId_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriesToProducts" DROP CONSTRAINT "_CategoriesToProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoriesToProducts" DROP CONSTRAINT "_CategoriesToProducts_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsToDistributorLocation" DROP CONSTRAINT "_ProductsToDistributorLocation_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsToDistributorLocation" DROP CONSTRAINT "_ProductsToDistributorLocation_B_fkey";

-- AlterTable
ALTER TABLE "DistributorLocation" ALTER COLUMN "contact" DROP NOT NULL,
ALTER COLUMN "googleMapUrl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "registro_senasa" DROP NOT NULL,
ALTER COLUMN "presentaciones" DROP NOT NULL;

-- DropTable
DROP TABLE "_CategoriesToProducts";

-- DropTable
DROP TABLE "_ProductsToDistributorLocation";

-- CreateTable
CREATE TABLE "products_on_categories" (
    "productId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_on_categories_pkey" PRIMARY KEY ("productId","categoryId")
);

-- CreateTable
CREATE TABLE "products_on_distributor_locations" (
    "productId" INTEGER NOT NULL,
    "distributorLocationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_on_distributor_locations_pkey" PRIMARY KEY ("productId","distributorLocationId")
);

-- AddForeignKey
ALTER TABLE "products_on_categories" ADD CONSTRAINT "products_on_categories_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_on_categories" ADD CONSTRAINT "products_on_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsDestacados" ADD CONSTRAINT "ProductsDestacados_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImages" ADD CONSTRAINT "ProductImages_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_on_distributor_locations" ADD CONSTRAINT "products_on_distributor_locations_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_on_distributor_locations" ADD CONSTRAINT "products_on_distributor_locations_distributorLocationId_fkey" FOREIGN KEY ("distributorLocationId") REFERENCES "DistributorLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
