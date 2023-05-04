import { useContext } from "react";
import Modal from "../UI/modal";
import classes from "./confirmAction.module.css";
import { notesContext } from "../store/context";
const ConfirmAction = (props) => {
  const ctx = useContext(notesContext);

  return (
    <Modal>
      <from className={classes.from}>
        <p> Delete this task permently ? </p>
        <div className={classes.action}>
          <button
            onClick={() => {
              ctx.onRemoveNote(props.id, props.listName);
              ctx.onShowDeletionMsg();
            }}
          >
            Yes
          </button>
          <button
            autoFocus={true}
            onClick={() => {
              ctx.onShowDeletionMsg();
            }}
          >
            No
          </button>
        </div>
      </from>
    </Modal>
  );
};

export default ConfirmAction;
