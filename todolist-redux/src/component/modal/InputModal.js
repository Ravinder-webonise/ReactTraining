import React, { useEffect, useState } from "react";
import "./inputmodal.css";
import { updateTodo } from "../../store/state/actions/todoActions";
import { connect } from "react-redux";

function InputModal({
  id,
  updateDispatch,
  list,
  onCancel,
  onUpdate,
  originalText,
}) {
  const [text, setText] = useState(originalText);

  const textChange = (e) => {
    setText(e.target.value);
  };

  const updateHandler = () => {
    if (text.trim().length === 0) {
      setText("");
      alert("Invalid empty not allowed");
      return;
    }
    updateDispatch(id, text);
    setText("");
    onUpdate();
  };
  useEffect(() => {});

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onCancel}>
          &times;
        </span>
        <p>Edit</p>
        <input
          className="inputEditBox"
          type="text"
          name="name"
          value={text}
          placeholder="Add todo..."
          onChange={textChange}
        />
        <input
          className="addButton"
          type="button"
          value="Update"
          onClick={updateHandler}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  updateDispatch: (id, text) => dispatch(updateTodo(id, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputModal);
