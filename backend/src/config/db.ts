import mongoose from "mongoose";
import envConfig from "./config.js";
const connectToDatabase = async () => {
  try {
    await mongoose.connect(envConfig.mongoDbString as string);
    mongoose.connection.on("Connected",()=>{
        console.log("Connected to db successfully");
    })
  } catch (error) {
    console.log("Failed to connect database");
    process.exit(1)
  }
};

export default connectToDatabase

