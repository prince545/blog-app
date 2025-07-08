import { NextResponse } from "next/server";
import Connectiondb from "../../lib/config/db";
import { writeFile } from "fs/promises";
import { Buffer } from "buffer";
import path from "path";
import fs from "fs";
import BlogModel from "../../lib/model/BlogModel"; // Fixed path

export async function GET(request) {
  await Connectiondb();
  const blogs = await BlogModel.find().sort({ createdAt: -1 });
  return NextResponse.json({ blogs });
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

  const blogData = {
    title: formData.get('title'),
    description: formData.get('description'),
    category: formData.get('category'),
    author: formData.get('author'),
    image: imgUrl,
    authorImg: formData.get('authorImg'),
  };

  // Save to MongoDB
  await BlogModel.create(blogData);

  return NextResponse.json({ imgUrl });
}

export async function PUT(request) {
  await Connectiondb();
  console.log("Blog PUT Hit");
  return NextResponse.json({ msg: "PUT method received" });
}

export async function DELETE(request) {
  await Connectiondb();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'No blog ID provided' }, { status: 400 });
  }
  const deleted = await BlogModel.findByIdAndDelete(id);
  if (!deleted) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'Blog deleted' });
}
