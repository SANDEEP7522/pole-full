import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const pollSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    question: {
      type: String,
      require: true,
    },
    options: [optionSchema],
    voted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Poll = mongoose.model("Poll", pollSchema);
export default Poll;
