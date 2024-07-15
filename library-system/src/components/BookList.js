// src/components/BookList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back</Link>
    </div>
  );
};

export default BookList;

