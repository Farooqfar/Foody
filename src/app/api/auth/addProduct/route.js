import cloudinary from "@/app/lib/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formdata = await req.formData();
  const name = formdata.get("name");
  const description = formdata.get("description");
  const price = formdata.get("price");
  const sale = formdata.get("sale");
  const file = formdata.get("image");

  if (!file.type.startWith("image")) {
    return NextResponse({
      success: false,
      message: "Only Images you can uploaded",
    });
  }

  const array_buffer = await file.arrayBuffer();
  const buffer = Buffer.from(array_buffer);
  const base64 = buffer.toString("base64");

  const upload_clodnary = await cloudinary.uploader.upload(
    `data:${file.type} ; base64  , ${base64}`,
    {
      folder: "",
      resource_type: "image",
    }
  );

  return NextResponse.json({
    success: true,
    message: "add product successfully",
  });
}
