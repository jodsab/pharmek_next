import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET() {
  try {
    const locations = await db.distributorLocation.findMany({
      include: {
        products: true, // Incluye los productos de cada ubicación
        distributor: true, // Incluye la información del distribuidor
      },
    });

    return NextResponse.json(locations);
  } catch (error) {
    console.error("ERROR EN API:", error); // Imprime el error en la consola
    return NextResponse.json(
      { message: "Error interno en el servidor", error: error.message },
      { status: 500 }
    );
  }
}
