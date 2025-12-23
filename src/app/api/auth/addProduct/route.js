import cloudinary from "@/app/lib/cloudinary";
import { connect_db } from "@/app/lib/connection";
import addProduct from "@/app/models/addProduct";
import { NextResponse } from "next/server";

export async function POST(req) {
  connect_db();
  const formdata = await req.formData();
  const name = formdata.get("name");
  const description = formdata.get("description");
  const price = formdata.get("price");
  const sale = formdata.get("sale");
  const file = formdata.get("image");

  if (!file) {
    return NextResponse.json({
      status: 400,
      message: "Image must be uploaded",
    });
  }

  if (file.size > 1 * 1024 * 1024) {
    return NextResponse.json({
      status: 409,
      message: "file size must be less than 1MB ",
    });
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json(
      {
        success: false,
        message: "Only Images you can uploaded",
      },
      {
        status: 400,
      }
    );
  }

  const array_buffer = await file.arrayBuffer();
  const buffer = Buffer.from(array_buffer);
  const base64 = buffer.toString("base64");

  const upload_clodnary = await cloudinary.uploader.upload(
    `data:${file.type};base64,${base64}`,
    {
      folder: "",
      resource_type: "image",
    }
  );

  const add_products = await addProduct.create({
    name,
    description,
    price,
    sale,
    image: upload_clodnary.secure_url,
  });

  console.log(add_products);

  return NextResponse.json({
    success: true,
    message: "add product successfully",
  });
}

export async function GET() {
  connect_db();
  const all_products = await addProduct.find();
  return NextResponse.json({
    status: 201,
    allproduct: all_products,
  });
}

export async function DELETE(req) {
  connect_db();
  let { id } = await req.json();
  console.log(id);
  const delete_product = await addProduct.findByIdAndDelete(id);
  console.log(delete_product);
  return NextResponse.json({
    status: 200,
    message: "Deleted",
  });
}
