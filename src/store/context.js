import React, { useReducer, useState } from "react";

const notesContext = React.createContext({
  toDoNotes: [],
  doneNotes: [],
  showAddNote: false,
  showDeletionMsg: false,
  onAddNote: (taskItem) => {},
  onRemoveNote: (id) => {},
  onUpgradueNote: (id) => {},
  onReturnNote: (id) => {},
  onShowAddNote: () => {},
  onShowDeletionMsg: () => {},
});

const ContextProvider = (props) => {
  const reducerFunction = (prevState, action) => {
    if (action.type === "ADD") {
      if (prevState.toDoNotes.length === 0) {
        return {
          ...prevState,
          toDoNotes: [action.data],
        };
      } else if (prevState.toDoNotes.length > 0) {
        return {
          ...prevState,
          toDoNotes: [...prevState.toDoNotes, action.data],
        };
      }
    }
    if (action.type === "REMOVE") {
      if (action.state === "todo") {
        return {
          ...prevState,
          toDoNotes: prevState.toDoNotes.filter(
            (item) => item.id !== action.id
          ),
        };
      } else if (action.state === "done") {
        return {
          ...prevState,
          doneNotes: prevState.doneNotes.filter(
            (item) => item.id !== action.id
          ),
        };
      }
      // }
    }
    if (action.type === "UP") {
      const upGradedTask = prevState.toDoNotes.find(
        (item) => item.id === action.id
      );
      return {
        doneNotes: [...prevState.doneNotes, upGradedTask],
        toDoNotes: prevState.toDoNotes.filter((item) => item.id !== action.id),
      };
    }
    if (action.type === "RETURN") {
      const returnedTask = prevState.doneNotes.find(
        (item) => item.id === action.id
      );
      return {
        toDoNotes: [...prevState.toDoNotes, returnedTask],
        doneNotes: prevState.doneNotes.filter((item) => item.id !== action.id),
      };
    }
  };
  const [showAddNote, setShowAddNote] = useState(false);
  const [showDeletionMsg, setShowDeletionMsg] = useState(false);

  const toggleAddNote = () => {
    console.log('form adding')
    setShowAddNote((state) => !state);
  };
  const toggleShowDeletionMsg = () => {
    console.log('form deletion')
    setShowDeletionMsg((state) => !state);
  };

  const [state, dispatchFunc] = useReducer(reducerFunction, {
    toDoNotes: localStorage.toDoNotes ? JSON.parse(localStorage.toDoNotes) : [],
    doneNotes: localStorage.doneNotes ? JSON.parse(localStorage.doneNotes) : [],
  });
  const removeNoteHandler = (id, noteState) => {
    dispatchFunc({ type: "REMOVE", id, state: noteState });
  };
  const upgradeNoteHandler = (id) => {
    dispatchFunc({ type: "UP", id });
  };
  const addNoteHandler = (taskItem) => {
    dispatchFunc({ type: "ADD", data: taskItem });
  };
  const returnNoteHandler = (id) => {
    dispatchFunc({ type: "RETURN", id });
  };
  localStorage.setItem("toDoNotes", JSON.stringify(state.toDoNotes));
  localStorage.setItem("doneNotes", JSON.stringify(state.doneNotes));
  return (
    <notesContext.Provider
      value={{
        toDoNotes: state.toDoNotes,
        doneNotes: state.doneNotes,
        showAddNote: showAddNote,
        showDeletionMsg: showDeletionMsg,
        onAddNote: addNoteHandler,
        onRemoveNote: removeNoteHandler,
        onUpgradueNote: upgradeNoteHandler,
        onReturnNote: returnNoteHandler,
        onShowAddNote: toggleAddNote,
        onShowDeletionMsg: toggleShowDeletionMsg,
      }}
    >
      {props.children}
    </notesContext.Provider>
  );
};

export { notesContext };
export default ContextProvider;
