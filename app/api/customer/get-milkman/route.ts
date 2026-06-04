import dbConnect from "@/lib/db";
import { Milkman } from "@/models/milkman.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const milkmen = await Milkman.find({}).populate("user_id");

    return NextResponse.json(
      {
        success: true,
        count: milkmen.length,
        data: milkmen,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET MILKMEN ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch milkmen" },
      { status: 500 }
    );
  }
}