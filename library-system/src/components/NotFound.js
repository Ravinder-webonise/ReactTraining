// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>
        <Link to="/">Go back to Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
