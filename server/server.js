// starting the webserver

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const task = require("./models/tasks");
const port = 8000;
app.use(express.json());
app.use(cors()); // Enable CORS

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
mongoose
  .connect("mongodb://127.0.0.1:27017/ProNotion")
  .then((res) => console.log("connected to MongoDB"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  try {
    const response = "this is the webserver running on port 8000";
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

app.get("/task", async (req, res) => {
  try {
    const alltask = await task.find();
    res.status(200).json(alltask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/task", async (req, res) => {
  const { text, rank, completed } = req.body;

  try {
    const newtask = new task({
      text,
      rank,
      completed,
    });

    // Save the new task to the database
    const savedTask = await newtask.save();

    // Respond with the saved task
    res.json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
