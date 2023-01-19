import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-white text-5xl">No hay tareas todavia</h1>;
  }
  return (
    <div className="grid grid-cols-3 gap-2 p-5">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
