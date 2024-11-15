const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  getToDos,
  addToDo,
  updateToDo,
  deleteToDo,
} = require("../controller/todoController");

router.get("/", protect, getToDos);

router.post("/", protect, addToDo);

router.put("/:id", protect, updateToDo);

router.delete("/:id", protect, deleteToDo);

module.exports = router;
