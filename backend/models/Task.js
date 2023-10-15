const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    deadline: {
      type: Date,
      required: true
    },
    task: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "completed", "ongoing"],
      default: "pending"
    }
  },
  {
    collection: "tasks"
  }
);

module.exports = mongoose.model("Task", taskSchema);