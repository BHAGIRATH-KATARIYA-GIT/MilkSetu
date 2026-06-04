import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/db";
import { User } from "@/models/user.model";
import { Customer } from "@/models/customer.model";

export async function GET() {
  try {
    await dbConnect();

    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const customers = await Customer.find({ milkman_id: session.user.id }).select("-password");

    if (!customers) {
      return NextResponse.json(
        { success: false, message: "Customers not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: customers ,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET CUSTOMERS ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}