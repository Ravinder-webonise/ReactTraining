import React from "react";
import "./todoitems.css";
import { FaTrash, FaEdit } from "react-icons/fa";

function TodoItems({ onCheck, onClick, data, onEdit }) {
  const checkHandler = () => {
    onCheck({ id: data.id, completed: data.completed });
  };

  const clickHandler = () => {
    onClick(data.id);
  };

  const editHandler = () => {
    onEdit(data.id, data.text);
  };

  const Status = () => {
    return (
      <label
        style={{
          alignSelf: "start",
          fontSize: "10px",
          marginLeft: "14px",
          marginBottom: "10px",
          color: data.completed ? "green" : "blue",
        }}
      >
        {data.completed ? "Completed" : "Upcomming"}
      </label>
    );
  };

  return (
    <div className="todoitem">
      <Status />
      <div className="todoItem-Wrapper">
        <div className="todoItemWrapper">
          <input
            className="checkBox"
            type="checkbox"
            onChange={checkHandler}
            checked={data.completed}
          />
          <label
            className={`${data.completed ? "todoTextComplete" : "todoText"}`}
          >
            {data.text}
          </label>
        </div>
        <span className="deleteButton">
          <FaEdit onClick={editHandler} />
        </span>
        <span className="deleteButton">
          <FaTrash onClick={clickHandler} />
        </span>
      </div>
    </div>
  );
}

export default TodoItems;
