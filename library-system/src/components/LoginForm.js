// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const LoginForm = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    
    if (
        username.length === 5 &&
        password.match(/^(?=.*[A-Za-z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8}$/)
    ) {
        onSignIn(username);
        navigate('/books');
    } else {
        alert('Invalid username or password format.');
    }
};


  

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label>Username (5 characters): </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password (8 characters, alphabet, and one special character): </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
