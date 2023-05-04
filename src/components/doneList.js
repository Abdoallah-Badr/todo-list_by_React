import { useContext } from "react";
import TaskWarper from "../UI/taskWarper";
import { notesContext } from "../store/context";
import TaskItem from "./taskItem";
const DoneList = () => {
  const ctx = useContext(notesContext);

  return (
    <TaskWarper listName={"done"}>
      {ctx.doneNotes &&
        ctx.doneNotes.map((item) => {
          return <TaskItem key={item.id} itemData={item} listName={"done"} />;
        })}
    </TaskWarper>
  );
};
export default DoneList;
