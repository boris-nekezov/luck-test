import React from 'react';

import { useAppSelector } from './app/hooks';
import { selectLogin, selectPassword } from './features/user/userSlice';
import { Button, ColorsIcon } from '@luck-test/ui-kit';

import './App.scss';

function App() {
  const login = useAppSelector(selectLogin);
  const password = useAppSelector(selectPassword);
  const onRequest = async () => {
    const responce = await fetch('http://localhost:5000/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "login": login,
        "password": password
      })
    });

    const result = await responce.json();

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
