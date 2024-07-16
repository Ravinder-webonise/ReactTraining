import React, { useState } from "react";

import TodoItems from "../todoitems/TodoItems.js";
import { connect } from "react-redux";
import "./todolist.css";
import {
  completionStatus,
  permanentDelete,
} from "../../store/state/actions/todoActions.js";
import InputModal from "../modal/InputModal.js";
import List from "../List.js";

function TodoList({ listState, updateTodoDispatch, deleteTodoDipatch }) {
  const [isEdit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [text, setText] = useState("");

  const checkHandler = ({ id, completed }) => {
    updateTodoDispatch(id, !completed);
  };

  const trashhandler = (id) => {
    deleteTodoDipatch(id);
  };

  const editHandler = (id, text) => {
    setId(id);
    setText(text);
    setEdit(!isEdit);
  };

  const cancelHandler = () => {
    setEdit(!isEdit);
  };

  const updateHandler = () => {
    setEdit(!isEdit);
  };

  return (
    <div className="mainContainer">
      <List
        data={listState}
        renderItems={(index, data) => {
          return (
            !data.trashed && (
              <TodoItems
                key={data.id}
                data={data}
                onCheck={checkHandler}
                onClick={trashhandler}
                onEdit={(id, text) => {
                  editHandler(id, text);
                }}
              />
            )
          );
        }}
      />
      {isEdit ? (
        <InputModal
          id={id}
          originalText={text}
          onCancel={cancelHandler}
          onUpdate={updateHandler}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  listState: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  updateTodoDispatch: (id, status) => dispatch(completionStatus(id, status)),
  deleteTodo: (id) => dispatch(permanentDelete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
