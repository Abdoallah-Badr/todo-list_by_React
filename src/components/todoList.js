import { useContext } from "react";
import TaskItem from "./taskItem";
import ListWarper from "../UI/listWarper";
import { notesContext } from "../store/context";

const ToDoList = () => {
  const ctx = useContext(notesContext);
  return (
    <ListWarper listName={"todo"}>
      {ctx.toDoNotes &&
        ctx.toDoNotes.map((item) => {
          return <TaskItem key={item.id} itemData={item} listName={"todo"} />;
        })}
    </ListWarper>
  );
};

export default ToDoList;
