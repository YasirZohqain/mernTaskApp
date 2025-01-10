import { MdDoneAll } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";


const Task = () => {
  return (
    <div className="task">
      <p>
        <b>1.</b>
        Task One
      </p>
      <div className="task-icons">
      <MdDoneAll color="green"/>
      <CiEdit color="teal"/>
      <MdDeleteOutline color="red"/>
      </div>
    </div>
  )
}

export default Task