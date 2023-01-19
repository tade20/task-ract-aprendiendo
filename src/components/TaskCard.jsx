import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTasks } = useContext(TaskContext);
  return (
    <div className="bg-gray-700 text-white p-3 rounded-lg">
      <h3 className="text-2xl font-black capitalize text-center">
        {task.title}
      </h3>
      <p className="text-yellow-300">{task.description}</p>
      <button
        className="bg-red-800 rounded-md p-2 mt-1 hover:bg-red-300"
        onClick={() => deleteTasks(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
