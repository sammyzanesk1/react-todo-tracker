import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)} //we pass d action id as an input to d called or invoked on delete function...d function takes in dis id.
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
