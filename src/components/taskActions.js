import classes from "./taskActions.module.css";
import { notesContext } from "../store/context";
import { useContext } from "react";
import ConfirmAction from "./confirmAction";

const TaskActions = (props) => {
  const ctx = useContext(notesContext);
  return (
    <>
    {props.listName === "todo" ? (
        <span
          className={classes["task-done"]}
          onClick={() => {
            ctx.onUpgradueNote(props.id);
          }}
        >
          <i className="fa-solid fa-check"></i>
        </span>
      ) : null}
      {ctx.showDeletionMsg && (
        <ConfirmAction id={props.id} listName={props.listName} />
      )}
      <span
        className={classes.delete}
        onClick={() => {
          ctx.onShowDeletionMsg();
        }}
      >
        <i className="fa-solid fa-trash"></i>
      </span>
      {props.listName === "done" ? (
        <span
          className={classes.return}
          onClick={() => {
            ctx.onReturnNote(props.id);
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      ) : null}
    </>
      

  );
};

export default TaskActions;
