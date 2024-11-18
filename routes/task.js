const express = require('express');
const router = express.Router();
const { createTask, getAllTasks, updateTask, deleteTask } = require('../controller/taskController');
const { protect } = require("../middleware/auth");

router.post('/create',protect, createTask);
router.get('/all',protect, getAllTasks);
router.put('/update/:id',protect, updateTask);
router.delete('/delete/:id',protect, deleteTask);

module.exports = router;
