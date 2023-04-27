import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Creating schema
const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;

