import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { Customer } from "@/models/customer.model";
import { Address } from "@/models/address.model";
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
      name,
      address, 
      preferred_delivery_time,
    } = body;


    const existingCustomer = await Customer.findOne({ user_id: userId });

    if (existingCustomer) {
      return NextResponse.json(
        { success: false, message: "Customer already exists" },
        { status: 400 }
      );
    }


    const createdAddress = await Address.create({
      user_id: userId,
      ...address,
    });


    const customer = await Customer.create({
      user_id: userId,
      name,
      address: createdAddress._id, 
      preferred_delivery_time,
      wallet_balance: 0,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Customer created successfully",
        data: {
          customer,
          address: createdAddress,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CUSTOMER CREATE ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}