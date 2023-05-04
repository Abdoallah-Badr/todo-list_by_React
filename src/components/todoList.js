import { useContext } from "react";
import TaskItem from "./taskItem";
import NotesWarper from "../UI/notesWarper";
import { notesContext } from "../store/context";

const ToDoList = () => {
  const ctx = useContext(notesContext);
  return (
    <NotesWarper listName={"todo"}>
      {ctx.toDoNotes &&
        ctx.toDoNotes.map((item) => {
          return (
            <TaskItem
              key={item.id}
              itemData={item}
              listName={"todo"}
            />
          );
        })}
    </NotesWarper>
  );
};

export default ToDoList;
