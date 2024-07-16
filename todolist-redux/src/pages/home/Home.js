import React from "react";
import { FaAngleUp } from "react-icons/fa";
import AddTodo from "../../component/addtodo/AddTodo.js";
import TodoList from "../../component/todolist/TodoList.js";
import "./home.css";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-container">
      <AddTodo />
      <TodoList />
      <FaAngleUp id="scrollTopButton" onClick={scrollToTop} />
    </div>
  );
}
