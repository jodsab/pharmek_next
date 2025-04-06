import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET() {
  try {
    const categoriesFound = await db.categories.findMany({
      include: {
        products: true,
      },
    });
    if (categoriesFound) {
      return NextResponse.json(categoriesFound);
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
