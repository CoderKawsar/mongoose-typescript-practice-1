import app from "./app";
import mongoose from "mongoose";

const port: number = 5000;

// Database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`Database connection successful`);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}
bootstrap();
