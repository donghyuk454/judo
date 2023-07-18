import React from 'react';
import LoginForm from '../../components/Login/Login';
import './LoginPage.css';

const LoginPage = () => {
  const handleLogin = (email, password) => {
    // 로그인 로직을 구현하세요.
  };

  return (
    <div className='login-container'>
      <h2>로그인</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;