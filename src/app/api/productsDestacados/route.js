import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET() {
  try {
    const productsDestacadosFound = await db.productsDestacados.findMany({
      include: {
        product: true, // Incluir relación con Products
        imagenPrincipal: true, // Incluir relación con ProductImages
      },
    });
    if (productsDestacadosFound) {
      return NextResponse.json(productsDestacadosFound);
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
