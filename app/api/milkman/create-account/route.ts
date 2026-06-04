import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { Milkman } from "@/models/milkman.model";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    const body = await req.json();

    const {
      business_name,
      service_radius_km,
    } = body;

    // check if milkman already exists
    const existing = await Milkman.findOne({ user_id: userId });

    if (existing) {
      return NextResponse.json(
        { success: false, message: "Milkman already exists" },
        { status: 400 }
      );
    }

    const milkman = await Milkman.create({
      user_id: userId,
      business_name,
      service_radius_km,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Milkman profile created",
        data: milkman,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("MILKMAN CREATE ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}