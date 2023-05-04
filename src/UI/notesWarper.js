import classes from "./notesWarper.module.css";

const NotesWarper = (props) => {
  const icon =
    props.listName === "done" ? (
      <i class="icon fa-regular fa-circle-check fa-2xl"></i>
    ) : (
      <i class="icon fa-regular fa-clipboard fa-2xl"></i>
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
export default NotesWarper;
