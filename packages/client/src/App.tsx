import React from 'react';

import { Button, ColorsIcon } from '@luck-test/ui-kit';

import './App.scss';

function App() {
  const onRequest = async () => {
    const responce = await fetch('http://localhost:5000/login', { 
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        "login": "test@gmail.com",
        "password": "test_Pa$w0rd"
      }) 
    });

    const result = await responce.json();

    console.log(result);
  }

  return (
    <div className="App">
      <ColorsIcon />
      <Button label="test" onClick={onRequest}/>
      Hello World!!!
    </div>
  );
}

export default App;
