import connect from "@/app/lib/db/mongodb";
import User from "@/app/lib/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const data = await User.find();
    return NextResponse.json({ message: "successfull", data });
  } catch (error) {
    throw new Error("Error" + error);
  }
}
