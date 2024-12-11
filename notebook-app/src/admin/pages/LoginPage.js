import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import './style.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (status) => {
    if (status) {
      navigate('/admin/dashboard'); // Redirect to dashboard after successful login
    }
  };

  return (
    <section style={{ width: '1000px' }}>
       <div className="login-page">
      <div className="top">
        <h2>Welcome to the Admin System</h2>
        <p>Please login to manage the system</p>
      </div>
      <div className="center">
        <LoginForm onLogin={handleLogin} />
      </div>
      <div className='bottom'></div>
    </div>
    </section>
  );
};

export default LoginPage;
