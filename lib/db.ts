import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

const dbConnect = async () => {
  try {
    if (connection.isConnected) {
      console.log("DB ALREDY CONNECTED!");
      return;
    }
    const DB_STRING = process.env.DB_STRING;
    if (!DB_STRING) {
      console.error("DB IS NOT FOUND");
      return;
    }

    const conn = await mongoose.connect(DB_STRING);
    console.log(conn);
  } catch (error) {
    console.error("DB CONNECTION FAILED: ", error);
  }
};

export default dbConnect;
