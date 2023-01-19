import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTasks } = useContext(TaskContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    createTasks({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handelSubmit} className="bg-blue-800 p-10 mb-4">
        <h1 className="text-center text-orange-300 text-4xl">
          Crear una nueva tarea
        </h1>
        <input
          className="p-3 text-center w-full mb-3"
          placeholder="Escribe una tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          className="p-3 text-center w-full mb-3"
          placeholder="Escribir descripcion de la nueva tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-indigo-400 px-3 py-1 text-white rounded-sm">
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
