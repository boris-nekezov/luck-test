import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import axios from 'axios';

import { useAppSelector } from './app/hooks';
import { selectLogin, selectPassword } from './features/user/userSlice';

import HomePage from './pages/Home';

import './App.scss';

function App() {
  const login = useAppSelector(selectLogin);
  const password = useAppSelector(selectPassword);

  const onRequest = async () => {
    const response = axios.post('http://localhost:5000/login', {
      login,
      password
    })
      .then(res => res.data);

    const result = await response;

    console.log(result);
  }

  return (
    <BrowserRouter>
      <div className="App" onClick={onRequest}>
        Hello World!!!
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
