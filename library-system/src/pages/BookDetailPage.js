// src/pages/BookDetailPage.js
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import '../style.css';

const BookDetailPage = ({ user, books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!user) {
    return <Navigate to="/" />;
  }

  if (!book) {
    return <Navigate to="/books" />;
  }

  return (
    <div>
      <BookDetail book={book} />
    </div>
  );
};

export default BookDetailPage;
