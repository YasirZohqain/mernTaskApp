import { ToastContainer, toast } from 'react-toastify';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="app">
      <div className="task-container">
        <center> <h1>Task Manager</h1></center>
         <TaskForm/>
         <TaskList/>
         <Task/>
         <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;