const Task = require('../models/taskModel');


// CREATE A TASK ... craete function
const createTask = async(req, res) => {
    try {
        const tasks = await Task.create(req.body)
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}



const getTasks = async(req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        
    }
}

// get single task
const getTask = async (req, res) => {
    try {
        const {id} = req.params
        const task = Task.findById(id);
        if(!task) {
            return res.status(404).json(`NO task with id: ${id}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}


const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = Task.findByIdAndDelete(id); 

        if (!task) {
            return res.status(404).json(`No task with id: ${id}`);
        }

        res.status(200).send('Task deleted');
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


module.exports = {createTask, getTasks, getTask, deleteTask}