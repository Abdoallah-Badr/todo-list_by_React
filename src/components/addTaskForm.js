import AddTaskFormUi from "../UI/addTaskFormUi";
import { nanoid } from "nanoid";
import classes from "../UI/addTaskFormUi.module.css";
import { useContext, useRef, useState } from "react";
import { notesContext } from "../store/context";

const AddTaskForm = (props) => {
  const taskName = useRef();
  const taskClient = useRef();
  const taskDate = useRef();
  const [selectedChoice, setSelectedChoice] = useState("");

  const ctx = useContext(notesContext);
  const taskPriority = selectedChoice;

  const handleButtons = (event) => {
    setSelectedChoice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const taskData = {
      name: taskName.current.value,
      client: taskClient.current.value,
      date: taskDate.current.value,
      priority: taskPriority,
      id: nanoid(),
    };
    if (Object.values(taskData).some((val) => val === "")) {
      console.log("err");
      return;
    }
    ctx.onAddNote(taskData);
    ctx.onShowAddNote();
  };
  return (
    <AddTaskFormUi onClose={props.clickHandler}>
      <form id="note-form" className={classes.form}>
        <div>
          <div className={classes.info}>
            <label className={classes.label} htmlFor="task-name">
              Task name
            </label>
            <input
              id="task-name"
              className={classes.input}
              name="task-name"
              type={"text"}
              maxLength={60}
              ref={taskName}
              autoFocus={true}
              required
            ></input>
          </div>
          <div className={classes.info}>
            <label htmlFor="client">Client or Project</label>
            <input
              id="client"
              name="client"
              type={"text"}
              maxLength={25}
              ref={taskClient}
              required
            ></input>
          </div>
        </div>
        <fieldset>
          <legend>Please select the priority of this task :</legend>
          <div>
            <input
              id="high"
              type={"radio"}
              value={"high"}
              name="priority"
              onChange={handleButtons}
              required
            />
            <label htmlFor="high">High</label>
          </div>
          <div>
            <input
              id="medium"
              type={"radio"}
              value={"medium"}
              name="priority"
              onChange={handleButtons}
              required
            />
            <label htmlFor="medium">Medium</label>
          </div>
          <div>
            <input
              id="low"
              type={"radio"}
              value={"low"}
              name="priority"
              onChange={handleButtons}
              required
            />
            <label htmlFor="low"> Low </label>
          </div>
        </fieldset>
        <div className={classes["date-container"]}>
          <label htmlFor="date"> Pick a Task end date : </label>
          <input
            type={"date"}
            ref={taskDate}
            id={"date"}
            name={"date"}
            min="2023-01-01"
            max="2024-12-31"
            required
          />
        </div>
        <button type="submit" onClick={submitHandler}>
          {"add the Task"}
        </button>
      </form>
    </AddTaskFormUi>
  );
};

export default AddTaskForm;
