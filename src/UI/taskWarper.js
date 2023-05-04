import classes from "./taskWarper.module.css";

const TaskWarper = (props) => {
  const icon =
    props.listName === "done" ? (
      <i className="icon fa-regular fa-circle-check fa-2xl"></i>
    ) : (
      <i className="icon fa-regular fa-clipboard fa-2xl"></i>
    );
  const title = props.listName === "done" ? "Done" : "To-Do";

  return (
    <div className={`${classes.warper} ${props.listName}`} key={props.key}>
      <div id="title-container">
        {icon}
        <h2>{title}</h2>
      </div>
      {props.children}
    </div>
  );
};
export default TaskWarper;
