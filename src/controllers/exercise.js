import Exercise from "../models/exercise.js";

export const createExercise = async (req, res, next) => {
  try {
    const exercise = await Exercise.create(req.body);
    res.status(201).json({
      status: "success",
      data: exercise,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteExercise = async (req, res, next) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!exercise) {
      return res.status(404).json("No Exercise was found with given id");
    }
    // Send response
    res.status(204).json({
      status: "success",
      data: null,
    });

  } catch (error) {
    res.status(500).json(error);
  }
};
