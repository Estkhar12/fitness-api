import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Database is connected!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is runnig on ${port}...`);
});
