const express = require ("express")
const Task = require('../models/taskModel');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const router = express.Router()





router.post('/api/tasks', createTask)


// Read Data from moongoDB 

router.get('/api/tasks', getTasks)


// router for single task params mean ID etc

router.get('/api/tasks/:id', getTask)


// delete task

router.delete('/api/tasks/:id', deleteTask)

// update task

router.put('/api/tasks/:id', updateTask)

module.exports = router