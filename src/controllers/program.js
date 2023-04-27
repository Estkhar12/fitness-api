import Program from "../models/program.js";

export const createProgram = async (req, res, next) => {
  const { name, exercises } = req.body;
  try {
    const program = new Program({
      name,
      exercises: exercises || [],
    });
    await program.save();
    res.status(201).json({
      status: "success",
      data: program,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editProgram = async (req, res, next) => {
  const data = {
    name: req.body.name,
    exercises: req.body.exercises || [],
  };
  try {
    const program = await Program.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });
    // Return an error if doc is not found
    if (!program) {
      return res.status(404).json("No program was found with given id");
    }
    // Send response
    res.status(200).json({
      status: "success",
      data: program,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProgram = async (req, res, next) => {
  try {
    const program = await Program.findByIdAndDelete(req.params.id);

    // Return an error if doc is not found
    if (!program) {
      return res.status(404).json("No program was found with given id");
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
