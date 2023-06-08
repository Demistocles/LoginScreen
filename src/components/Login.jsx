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
      <div>
        <div className='big-ellipse'/>
        <div className='small-ellipse'/>
        <div className='triangle1'/>
        <div className='triangle2'/>
        <div className='triangle3'/>
        <form className='login'>
          <h1>Login</h1>
          <input
            className='input-login'
            type='email'
            placeholder='Username'
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            />
          <input
            className='input-password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            />
          <button
            type='submit'
            onClick={validateLogin}
            >login</button>
        </form>

      </div>
    </div>
  );
};

export default Login;
