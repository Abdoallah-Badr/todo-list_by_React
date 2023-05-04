import { useContext } from "react";
import NotesWarper from "../UI/notesWarper";
import { notesContext } from "../store/context";
import TaskItem from "./taskItem";
const DoneList = () => {
  const ctx = useContext(notesContext);

  return (
    <NotesWarper listName={"done"}>
      {ctx.doneNotes &&
        ctx.doneNotes.map((item) => {
          return <TaskItem key={item.id} itemData={item} listName={"done"} />;
        })}
    </NotesWarper>
  );
};
export default DoneList;
