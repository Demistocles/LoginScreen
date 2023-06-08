import React,{useState} from 'react';

import Login from '../components/Login';

const Home = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true)
  }

  const handleLogout = () => {
    setIsLogged(false)
  }

  return (
    <div className='home-screen'>
      {!isLogged ? <Login handleLogin={handleLogin} /> :
        <div>
          <h2>Home</h2>
          <p>logado</p>
          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      }
    </div>
  );
};

export default Home;
