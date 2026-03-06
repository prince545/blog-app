import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  if (!uri) {
    console.error("❌ MONGODB_URI is not defined in .env");
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection failed:", error);
    throw error;
  }
};

export default connectDB;
