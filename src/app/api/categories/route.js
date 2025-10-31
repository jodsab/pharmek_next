import { NextResponse } from 'next/server'

import db from '@/libs/db'

export async function GET() {
  try {
    const categoriesFound = await db.categories.findMany({
      include: {
        products: {
          // 'products' here refers to the ProductsOnCategories join table entries
          include: {
            product: {
              // Now, include the actual 'product' relation from the join table
              select: {
                // Select only the fields you need from the Product model
                id: true,
                nombre: true
              }
            }
          }
        }
      }
    })

    // We need to transform the data to match the structure expected by your frontend
    const formattedCategories = categoriesFound.map(category => ({
      id: category.id,
      categoryName: category.categoryName,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
      products: category.products.map(poc => ({
        // poc = ProductsOnCategories
        // Here, poc.product is the actual Product object you included
        productId: poc.product.id, // Use the product's actual ID
        nombre: poc.product.nombre, // Use the product's actual name
        categoryId: poc.categoryId, // Keep categoryId from the join table if needed
        createdAt: poc.createdAt // Keep createdAt from the join table if needed
        // You can add other product fields here if you selected them
      }))
    }))

    if (formattedCategories) {
      return NextResponse.json(formattedCategories)
    }
  } catch (error) {
    console.error('Error fetching categories:', error) // Log the actual error
    return NextResponse.json(
      {
        message: 'Error al obtener categorías y productos: ' + error.message
      },
      {
        status: 500
      }
    )
  }
}
