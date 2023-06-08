import React,{ useState } from 'react';

import './Login.css';

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');

  const validateLogin = () => {
    event.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;

    if(emailRegex.test(email) && password.length >= 6) {
      handleLogin();
    } else {
      alert('E-mail ou senha inválida');
      setEmail('');
      setPassword('');
    }
  };
  
  

  return (
    <div className='login-screen'>
      <div className='login'>
        <h1>Login</h1>
        <form>
          <input
            type='email'
            placeholder='digite seu login...'
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            />
          <input
            type='password'
            placeholder='digite sua senha...'
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            />
          <button
            type='submit'
            onClick={validateLogin}
            >logar</button>
        </form>

      </div>
    </div>
  );
};

export default Login;
