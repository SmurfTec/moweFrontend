import mongoose from "mongoose";

// Export the mongoose connection object
export const db = mongoose.connection;

export const connectMongoDB = async () => {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Database connected...");
  } catch (error) {
    console.error("Connection failed:", error);
  }
};
