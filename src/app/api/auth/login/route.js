import { connect_db } from "@/app/lib/connection";
import register from "@/app/models/register";
import { NextResponse } from "next/server";

export async function POST(request) {
  let { email, password } = await request.json();
  if (!email || !password) {
    return NextResponse.json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    await connect_db();
    let find_email = await register.findOne({ email });
    if (!find_email) {
      return NextResponse({
        success: false,
        message: "Email Does Not Exists",
      });
    }
    let compare_password = await find_email.comparePassword(password);
    if (compare_password) {
      console.log(password);
    }
    return NextResponse.json({
      success: true,
      message: "login successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error,
    });
  }
}
