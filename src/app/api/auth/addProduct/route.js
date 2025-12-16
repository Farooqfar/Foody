import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export const runtime = "nodejs"; // IMPORTANT for Vercel

export async function POST(req) {
  try {
    // ✅ Read FormData
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ error: "No file received" }, { status: 400 });
    }

    // ✅ Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files allowed" },
        { status: 400 }
      );
    }

    // ✅ Convert to Base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");

    // ✅ Upload to Cloudinary
    const uploadRes = await cloudinary.uploader.upload(
      `data:${file.type};base64,${base64}`,
      {
        folder: "nextjs-products",
        resource_type: "image",
      }
    );

    // ✅ Success Response
    return NextResponse.json({
      success: true,
      url: uploadRes.secure_url,
      public_id: uploadRes.public_id,
    });
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);

    return NextResponse.json({ error: "Image upload failed" }, { status: 500 });
  }
}
