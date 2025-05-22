import mongoose from "mongoose";

const uri = "mongodb+srv://daljeetkaur9570:AKyn1EGarORfWcJM@cluster0.fhukl2r.mongodb.net/new?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to 'new' database");
  } catch (error) {
    console.error("❌ Connection failed:", error);
  }
};

connectDB();
