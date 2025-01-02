const express = require ("express")
const Task = require('../models/taskModel');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const router = express.Router()





router.post('/', createTask)


// Read Data from moongoDB 

router.get('/', getTasks)


// router for single task params mean ID etc

router.get('/', getTask)


// delete task

router.delete('/:id', deleteTask)

// update task

router.put('/:id', updateTask)

module.exports = router