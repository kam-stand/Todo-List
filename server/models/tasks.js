const mongoose = require("mongoose");
// Define schema
var Schema = mongoose.Schema;
var taskSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  rank: {
    type: Number,
    default: 0,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  inProgress: {
    type: Boolean,
    default: false,
  },
  reminder: {
    type: Date,
  },
});
module.exports = mongoose.model("Task", taskSchema);
