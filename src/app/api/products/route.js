import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET() {
  try {
    const productsFound = await db.products.findMany({
      include: {
        categories: true,
      },
    });

    if (productsFound) {
      return NextResponse.json(productsFound);
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
