import { useContext } from "react";
import ListWarper from "../UI/listWarper";
import { notesContext } from "../store/context";
import TaskItem from "./taskItem";
const DoneList = () => {
  const ctx = useContext(notesContext);

  return (
    <ListWarper listName={"done"}>
      {ctx.doneNotes &&
        ctx.doneNotes.map((item) => {
          return <TaskItem key={item.id} itemData={item} listName={"done"} />;
        })}
    </ListWarper>
  );
};
export default DoneList;
