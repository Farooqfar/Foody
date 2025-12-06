import { connect_db } from "@/app/lib/connection";
import Register from "@/app/models/register";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(request) {
  let { name, email, password } = await request.json();
  if (!name || !email || !password) {
    return NextResponse.json({
      success: false,
      message: "All fields are requied",
    });
  }

  try {
    await connect_db();

    const email_exist = await Register.exists({ email });
    if (email_exist) {
      return NextResponse.json({
        success: false,
        message: "Email Already Exist",
      });
    }
    const new_user = new Register({
      name,
      email,
      password,
    });
    await new_user.save();

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await SignJWT({
      id: new_user._id.toString(),
      email: new_user.email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(secret);

    const res = NextResponse.json({
      success: true,
      message: "user register successfully",
      user: {
        email: new_user.email,
        role: "user",
      },
    });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
    });
    return res;
  } catch (error) {
    console.error("Register save error:", error);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
