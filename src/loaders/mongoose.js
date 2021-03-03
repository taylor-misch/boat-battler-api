import mongoose from "mongoose";
import config from "../config/index.js";

export default async () => {
  try {
    const connection = await mongoose.connect(config.mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(err);
    process.exit(1);
  }
};
