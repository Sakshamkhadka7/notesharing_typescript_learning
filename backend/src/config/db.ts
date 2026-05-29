import mongoose from "mongoose";
import envConfig from "./config.js";
const connectToDatabase = async () => {
  try {
      mongoose.connection.on("connected",()=>{
        console.log("Connected to db successfully");
    })
    await mongoose.connect(envConfig.mongoDbString as string);
  
  } catch (error) {
    console.log("Failed to connect database");
    process.exit(1)
  }
};

export default connectToDatabase

