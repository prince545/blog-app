import { NextResponse } from "next/server";
import Connectiondb from "../../lib/config/db";
import { writeFile } from "fs/promises";
import { Buffer } from "buffer";
import path from "path";
import fs from "fs";

export async function GET(request) {
  await Connectiondb();
  return NextResponse.json({ msg: "API Working" });
}

export async function POST(request) {
  await Connectiondb();

  const formData = await request.formData();
  const image = formData.get('image');

  if (!image || typeof image === "string") {
    return NextResponse.json({ error: "No valid image uploaded" }, { status: 400 });
  }

  const timestamp = Date.now();
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);

  const uploadDir = path.join(process.cwd(), "public", "blog_images");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filename = `${timestamp}_${image.name}`;
  const filePath = path.join(uploadDir, filename);
  await writeFile(filePath, buffer);

  const imgUrl = `/blog_images/${filename}`;
  console.log(imgUrl);

  return NextResponse.json({ msg: "Received", timestamp, image: imgUrl });
}

export async function PUT(request) {
  await Connectiondb();
  console.log("Blog PUT Hit");
  return NextResponse.json({ msg: "PUT method received" });
}

export async function DELETE(request) {
  await Connectiondb();
  console.log("Blog DELETE Hit");
  return NextResponse.json({ msg: "DELETE method received" });
}
