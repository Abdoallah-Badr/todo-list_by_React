import classes from "./addTaskFormUi.module.css";
import Modal from "./modal";

const AddTaskFormUi = (props) => {
  return (
    <Modal>
        {props.children}
    </Modal>
  );
};

export default AddTaskFormUi;
