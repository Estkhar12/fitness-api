import { Router } from "express";
import { createExercise, deleteExercise } from "../controllers/exercise.js";

const router = Router();

router.post("/", createExercise);
router.delete("/:id", deleteExercise);

export default router;
