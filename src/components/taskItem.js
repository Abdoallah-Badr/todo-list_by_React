import classes from "./taskItem.module.css";
import TaskActions from "./taskActions";
const TaskItem = (props) => {
  const data = props.itemData;
  const level = data.priority;

  return (
    <div className={classes["note-warper"]}>
      <div className={classes["note-item"]} key={data.id}>
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
      <div className={classes["task-actions"]}>
        <TaskActions listName={props.listName} id={data.id} />
      </div>
    </div>
  );
};

export default TaskItem;
