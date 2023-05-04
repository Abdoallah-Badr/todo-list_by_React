import { useContext } from "react";
import "./App.css";
import AddTaskForm from "./components/addTaskForm";
import ToDoList from "./components/todoList";
import DoneList from "./components/doneList";
import { notesContext } from "./store/context";

function App() {
  const ctx = useContext(notesContext);
  return (
    <div className="app">
      <h1> React To-Do List </h1>
      {!ctx.showAddNote && (
        <button
          className="add-new-task"
          onClick={() => {
            ctx.onShowAddNote();
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      )}
      {ctx.showAddNote && <AddTaskForm />}
      <div className="notes-container">
        <ToDoList />
        <DoneList />
      </div>
    </div>
  );
}

export default App;
