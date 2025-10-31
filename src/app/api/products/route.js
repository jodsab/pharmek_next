import { NextResponse } from 'next/server'

import db from '@/libs/db'

export async function GET() {
  try {
    const productsFound = await db.products.findMany({
      include: {
        categoriesOnProducts: {
          // Esto es para el filtro, asegúrate de que sigue aquí
          include: {
            category: true // Incluye la categoría real
          }
        },
        images: true // <-- ¡FUNDAMENTAL! Incluye la relación de imágenes
        // Otros includes si los necesitas (ej: ProductsDestacados)
      }
    })

    if (productsFound) {
      return NextResponse.json(productsFound)
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message
      },
      {
        status: 500
      }
    )
  }
}
