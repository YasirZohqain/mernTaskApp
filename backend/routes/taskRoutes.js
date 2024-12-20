const express = require ("express")
const Task = require('../models/taskModel');
const { createTask, getTask } = require("../controllers/taskController");
const router = express.Router()





router.post('/api/tasks', createTask)


// Read Data from moongoDB 

router.get('/api/tasks', getTask)




module.exports = router