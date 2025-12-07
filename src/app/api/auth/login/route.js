import { connect_db } from "@/app/lib/connection";
import register from "@/app/models/register";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
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
    if (!compare_password) {
      return NextResponse.json({
        success: false,
        message: "password is incorrect",
      });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({
      id: find_email._id.toString(),
      email: find_email.email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(secret);

    const res = NextResponse.json({
      success: true,
      message: "successfully login",
      user: {
        name: find_email.name,
        email: find_email.email,
      },
    });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
    });
    return res;
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error,
    });
  }
}
