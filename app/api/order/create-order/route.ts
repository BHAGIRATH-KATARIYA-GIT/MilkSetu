import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Customer } from "@/models/customer.model";
import Order from "@/models/order.model";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const userId = session.user.id;

    const body = await req.json();

    const { milkman_id, category, price, quantity, amount } = body;


    const customer = await Customer.findOne({ user_id: userId });

    if (!customer) {
      return NextResponse.json(
        { success: false, message: "Customer not found" },
        { status: 404 },
      );
    }



    const order = await Order.create({
      milkman_id,
      customer_id: customer._id,
      category,
      price,
      quantity,
      amount,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Order placed successfully",
        data: order,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("ORDER CREATE ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
