const mongoose = require("mongoose");
// Define schema
var Schema = mongoose.Schema;
var proejectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  notes: {
    type: String,
  },
  events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
});
module.exports = mongoose.model("Project", proejectSchema);
