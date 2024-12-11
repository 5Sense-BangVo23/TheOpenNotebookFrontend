import React, { useState } from 'react';
import './styles.css'; 
import '../../styles/global.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      onLogin(true);
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className='penel-login'>
      <div className='panel-left'>
        <div className="login-form">
      <h2 className='title-admin'>Login to the system for administrators</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    <div className='panel-right'>

    </div>
    </div>
    
    
  );
};

export default LoginForm;
