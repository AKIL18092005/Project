// LoginPage.js
import React, { useState } from 'react';
import Dashboard from './Dashboard'; // Create a Dashboard component for the next step
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, check if the username and password are not empty
    if (username && password) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="login-container">
      {!loggedIn ? (
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="input-box">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      ) : (
        <Dashboard username={username} />
      )}
    </div>
  );
};

export default LoginPage;