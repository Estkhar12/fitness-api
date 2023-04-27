import { Router } from "express";
import { createProgram, deleteProgram, editProgram } from "../controllers/program.js";


const router = Router();

router.post("/", createProgram);
router.patch("/:id", editProgram);
router.delete("/:id", deleteProgram);

export default router;
