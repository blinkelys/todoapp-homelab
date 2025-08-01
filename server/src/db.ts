import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD || "example";
    const dbPort = process.env.DB_PORT;
    const dbName = process.env.DB_NAME;
    const dbHost = process.env.DB_HOST;

    const mongoUri = `mongodb://${dbUser}:${encodeURIComponent(dbPassword)}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;

    console.log("Connecting to MongoDB with URI:", mongoUri);
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};