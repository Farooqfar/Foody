import { NextResponse } from "next/server";

export async function POST(request) {
  let { name, email, password } = await request.json();
  console.log(name, email);

  return NextResponse.json({
    success: true,
    message: "User data received",
  });
}
