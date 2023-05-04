import { useContext } from "react";
import classes from "./modal.module.css";
import ReactDOM from "react-dom";
import { notesContext } from "../store/context";

const overlayPortal = document.getElementById("overlays");
const Backdrop = () => {
  const ctx = useContext(notesContext);
  return (
    <div
      onClick={() => {
        ctx.showAddNote ? ctx.onShowAddNote() : ctx.onShowDeletionMsg();
      }}
      className={classes.backdrop}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, overlayPortal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayPortal
      )}
    </>
  );
};

export default Modal;
