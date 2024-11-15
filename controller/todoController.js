const ToDo = require("../model/Todo");

const getToDos = async (req, res) => {
  try {
    const todos = await ToDo.find({ user: req.user.id });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching to-dos" });
  }
};

const addToDo = async (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ message: "Task is required" });

  const newToDo = new ToDo({
    task,
    checked: false,
    user: req.user.id,
  });

  try {
    await newToDo.save();
    res.status(201).json(newToDo);
  } catch (err) {
    res.status(500).json({ message: "Error creating to-do" });
  }
};

const updateToDo = async (req, res) => {
  const { id } = req.params;
  const { checked } = req.body;

  try {
    const todo = await ToDo.findByIdAndUpdate(
      id,
      { checked },
      { new: true }
    );
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: "Error updating to-do" });
  }
};

const deleteToDo = async (req, res) => {
  const { id } = req.params;

  try {
    await ToDo.findByIdAndDelete(id);
    res.status(200).json({ message: "To-do item deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting to-do" });
  }
};

module.exports = {
  getToDos,
  addToDo,
  updateToDo,
  deleteToDo,
};
