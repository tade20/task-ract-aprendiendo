import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
function App() {
  return (
    <div className="bg-neutral-800 h-screen mx-auto">
      <TaskForm />
      <TaskList />
    </div>
  );
}
export default App;
