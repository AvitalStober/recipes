import connect from "@/app/lib/db/mongodb";
import User from "@/app/lib/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const { userName, email, password } = await request.json();
    const newUser = new User({ userName, email, password });
    await newUser.save();
    return NextResponse.json({
      message: "",
      user: {
        userName: userName,
        email: email,
        password: password,
      },
    });
  } catch (error) {
    throw new Error("Error " + error);
  }
}
