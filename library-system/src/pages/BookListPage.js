// src/pages/BookListPage.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import BookList from '../components/BookList';
import '../style.css';

const BookListPage = ({ user, books }) => {
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <BookList books={books} />
    </div>
  );
};

export default BookListPage;
