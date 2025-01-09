import TaskList from "./components/TaskList";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="app">
      <div className="task-container">
        <h1>OK</h1>
        <TaskList/>
        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
      </div>
    </div>
  );
}

export default App;