import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET() {
  try {
    const locations = await db.distributorLocation.findMany({
      include: {
        // Usa el nombre correcto del campo de relación de la tabla de unión
        productsOnDistributorLocations: {
          // Si necesitas incluir los productos reales a través de esta unión,
          // debes anidar otro include dentro:
          include: {
            product: true, // Incluye el objeto Product para cada vínculo
            // Si también necesitas la ubicación en sí dentro del vínculo (generalmente no necesario aquí)
            // distributorLocation: true
          },
        },
        distributor: true, // Si quieres incluir el distribuidor relacionado
        // ... otras inclusiones ...
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
