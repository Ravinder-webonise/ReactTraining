// src/components/BookDetail.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const BookDetail = ({ book }) => {
  return (
    <div>
      <h2>{book.name}</h2>
      <p>{book.summary}</p>
      <Link to="/books">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default BookDetail;
