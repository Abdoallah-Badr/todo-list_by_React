import { useContext, useEffect, useState } from "react";
import classes from "./taskItem.module.css";
import TaskActions from "./taskActions";
// import { notesContext } from "../store/context";
const TaskItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  const data = props.itemData;
  const level = data.priority;

  const mouseEnterHandler = () => {
    setIsHover(true);
  };
  const mouseLeaveHandler = () => {
    setIsHover(false);
  };

  return (
    <div className={classes["note-warper"]} onMouseLeave={mouseLeaveHandler}>
      <div
        className={classes["note-item"]}
        key={data.id}
        onMouseEnter={mouseEnterHandler}
      >
        <h3>{data.name} </h3>
        <div>
          <div className={classes[`priority-${level}`]}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className={classes.client}>{data.client}</p>
        </div>
        <p className={classes.date}>{data.date}</p>
      </div>
      {/* {isHover && */}
      <div className={classes["task-actions"]}>
        <TaskActions listName={props.listName} id={data.id} />
      </div>
    </div>
  );
};

export default TaskItem;
