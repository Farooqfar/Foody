import { connect_db } from "@/app/lib/connection";
import Register from "@/app/models/register";
import { NextResponse } from "next/server";

export async function POST(request) {
  let { name, email, password } = await request.json();
  console.log(name, email);
  try {
    await connect_db();
    console.log("connect DB");

    const new_user = new Register({
      name,
      email,
      password,
    });
    await new_user.save();
    console.log("saved");
  } catch (error) {
    console.error("Register save error:", error);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }

  return NextResponse.json({
    success: true,
    message: "User data received",
  });
}
