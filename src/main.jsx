import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import Login from './components/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
