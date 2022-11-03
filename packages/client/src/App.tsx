import React from 'react';
import axios from 'axios';

import { useAppSelector } from './app/hooks';
import { selectLogin, selectPassword } from './features/user/userSlice';
import { Button, ColorsIcon } from '@luck-test/ui-kit';

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
    <div className="App">
      <ColorsIcon />
      <Button label="test" onClick={onRequest} />
      Hello World!!!
    </div>
  );
}

export default App;
