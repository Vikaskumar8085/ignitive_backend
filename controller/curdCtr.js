const AsyncHandler = require("express-async-handler");
const Curd = require("../Model/Curd");

// Get All Task
const GetallTask = AsyncHandler(async (req, res) => {
  try {
    const GetTask = await Curd.find().lean();
    return res.status(200).json(GetTask);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// Getall Task

// Get Single Task

const GetsingleTask = AsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const SingleTask = await Curd.findById({ _id: id });
    if (SingleTask) {
      return res.status(200).json(SingleTask);
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// Get Single Task
// Add Task

const AddTask = AsyncHandler(async (req, res) => {
  try {
    const filename = req.file.filename;
    req.body.attachment = filename;
    const addItems = await Curd(req.body);
    await addItems.save();
    return res.status(201).json("data added");
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// Add Data

// Delete Task

const DeleteTask = AsyncHandler(async (req, res) => {
  try {
    const delTask = await Curd.findByIdAndDelete({ _id: req.params.id });
    if (delTask) {
      return res.status(200).json("Task Deleted");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// DeleteTask

// Update Task

const UpdateTask = AsyncHandler(async (req, res) => {
  try {
    const filename = req.file.filename;
    console.log(filename);
    req.body.attachment = filename;

    const updateItem = await Curd.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { runValidator: true, new: true }
    );
    if (updateItem) {
      return res.status(200).json(updateItem);
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = {
  GetallTask,
  GetsingleTask,
  AddTask,
  DeleteTask,
  UpdateTask,
};
