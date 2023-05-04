import { useContext } from "react";
import classes from "./modal.module.css";
import ReactDOM from "react-dom";
import { notesContext } from "../store/context";

const overlayPortal = document.getElementById("overlays");
const Backdrop = (props) => {
  const ctx = useContext(notesContext);
  return (
    <div
      onMouseLeave={() => {
        window.addEventListener("mouseleave", () => {
          console.log('ok man')
          ctx.onShowDeletionMsg();
        });
      }}
      onClick={props.onClose}
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
  const ctx = useContext(notesContext);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          onClose={() => {
            ctx.showAddNote ? ctx.onShowAddNote() : ctx.onShowDeletionMsg();
          }}
        />,
        overlayPortal
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayPortal
      )}
    </>
  );
};

export default Modal;
