import mongoose from "mongoose";
import { app } from "./app.js";

const start = async () => {
  if (!process.env.SERVICE_PORT) {
    throw new Error("SERVICE_PORT must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`Connected to Mongo: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
  }

  app.listen(process.env.SERVICE_PORT, () => {
    console.log(`Auth service listening on port ${process.env.SERVICE_PORT}`);
  });
};

start();
