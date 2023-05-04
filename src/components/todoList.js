import { useContext } from "react";
import TaskItem from "./taskItem";
import TaskWarper from "../UI/taskWarper";
import { notesContext } from "../store/context";

const ToDoList = () => {
  const ctx = useContext(notesContext);
  return (
    <TaskWarper listName={"todo"}>
      {ctx.toDoNotes &&
        ctx.toDoNotes.map((item) => {
          return <TaskItem key={item.id} itemData={item} listName={"todo"} />;
        })}
    </TaskWarper>
  );
};

export default ToDoList;
