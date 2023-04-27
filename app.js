import express from "express";
import exerciseRoute from "./src/routes/Exercise.js"
import programRoute from "./src/routes/Program.js"


const app = express();

app.use(express.json());

app.use("/api/exercise",  exerciseRoute);
app.use("/api/program",  programRoute);


export default app;
