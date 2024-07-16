import React, { useState } from "react";
import "./addtodo.css";
import { addTodo } from "../../store/state/actions/todoActions";
import { connect } from "react-redux";

function AddTodo({ add }) {
  const [text, setText] = useState("");

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  const addHandler = () => {
    if (text.trim().length === 0) {
      setText("");
      alert("Invalid empty not allowed");
      return;
    }
    add(text.trim());
    setText("");
    scrollToBottom();
  };

  return (
    <div className="mainDiv">
      <input
        className="inputBox"
        type="text"
        name="name"
        placeholder="Add todo..."
        onChange={textChange}
        value={text}
      />
      <input
        className="addButton"
        type="button"
        value="Add"
        onClick={addHandler}
      />
      <div className="dropdown">
        <div className="dropdown-content">
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  add: (text) => dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
