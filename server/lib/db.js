import mongoose from "mongoose";

// function to connect to the mongo db database

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected")
    );
    
    await mongoose.connect(`${process.env.MONGODB_URI}/test-db`);
  } catch (error) {
    console.log(error);
  }
};
