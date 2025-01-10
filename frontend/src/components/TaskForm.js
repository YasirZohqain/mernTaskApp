

const TaskForm = (createTask, handleInputChnage, name) => {
  return (
   <form className="task-form" onSubmit={createTask}>
      <input type="text" name="name" value={name} placeholder="Task Add Here" onChange={handleInputChnage}/>
      <button type="submit">Add</button>
   </form>
  )
}

export default TaskForm;