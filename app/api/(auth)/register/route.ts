import dbConnect from "@/lib/db";

import { Milkman } from "@/models/milkman.model";
import { Customer } from "@/models/customer.model";
import { User } from "@/models/user.model";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { name, email, password, role } = await request.json();

    // validation
    if (!email || !password || !role || !name) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // create user
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    // create profile based on role
    if (role === "MILKMAN") {
      await Milkman.create({
        user_id: user._id,
      });
    }

    if (role === "CUSTOMER") {
      await Customer.create({
        user_id: user._id,
      });
    }

    return NextResponse.json(
      {
        message: "Registration successful",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}