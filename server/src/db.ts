import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const dbUser = process.env.DB_USER || "root";
    const dbPassword = process.env.DB_PASSWORD || "example";
    const dbPort = process.env.DB_PORT || "27017";
    const dbName = process.env.DB_NAME || "inventory";
    const dbHost = process.env.DB_HOST || "localhost"; // optional, default to localhost

    const mongoUri = `mongodb://${dbUser}:${encodeURIComponent(dbPassword)}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;

    console.log("Connecting to MongoDB with URI:", mongoUri);
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};