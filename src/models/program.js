import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Creating schema
const programSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  exercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});

const Program = mongoose.model("Program", programSchema);

export default Program;
