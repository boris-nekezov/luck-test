import React from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { useAppSelector } from './app/hooks';
import { selectLogin, selectPassword } from './features/user/userSlice';
import { Button, ColorsIcon } from '@luck-test/ui-kit';

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
      <div className="App">
        <ColorsIcon />
        <Button label="test" onClick={onRequest} />
        Hello World!!!
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
