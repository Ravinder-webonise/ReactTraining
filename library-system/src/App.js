// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import BookListPage from "./pages/BookListPage";
import BookDetailPage from "./pages/BookDetailPage";
import NotFound from "./components/NotFound";
import "../src/style.css";

const App = () => {
  const [user, setUser] = useState(null); // or use localStorage to persist login state
  const [books] = useState([
    {
      id: "1",
      name: "Book 1",
      summary:
        "Book 1 is a thrilling adventure that takes the reader on a journey through uncharted territories. The protagonist faces numerous challenges, discovering the true meaning of bravery and friendship. With unexpected twists and a gripping storyline, this book keeps readers on the edge of their seats until the very end.",
    },
    {
      id: "2",
      name: "Book 2",
      summary:
        "Book 2 explores the depths of human emotions and relationships. Set in a small town, the story revolves around a close-knit community dealing with love, loss, and redemption. The rich character development and poignant narrative offer a profound look into the human condition, making it a compelling read for all.",
    },
    {
      id: "3",
      name: "Book 3",
      summary:
        "Book 3 is a fascinating historical fiction that transports readers back to an ancient civilization. Through meticulous research and vivid storytelling, the author brings the past to life, revealing the struggles and triumphs of people long gone. It's an enlightening and entertaining exploration of history that resonates with the present.",
    },
  ]);

  const handleSignIn = (username) => {
    setUser(username);
  };

  return (
    <Router>
      <header>
        <h1>Library Management System</h1>
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInPage onSignIn={handleSignIn} />} />
          <Route
            path="/books"
            element={<BookListPage user={user} books={books} />}
          />
          <Route
            path="/books/:id"
            element={<BookDetailPage user={user} books={books} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
