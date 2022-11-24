import { useEffect } from 'react';
import { Outlet, } from 'react-router-dom';
import axios from 'axios';

import { useAppSelector } from './app/hooks';
import { selectLogin, selectPassword } from './features/user/userSlice';

import { Header } from '@luck-test/ui-kit';

import './App.scss';

function App() {
  const login = useAppSelector(selectLogin);
  const password = useAppSelector(selectPassword);

  useEffect(() => {
    console.log('USEEFFECT IN APP COMPONENT!')
    // todo change later
    localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…2NTd9.cwierroJ1WvFMRW8iFpo-1RaZ33vR0TI75gm9sEaJBI')

    const isThereToken = !!localStorage.getItem('accessToken');
    console.log('isThereToken>>>', isThereToken);

    console.log('END USEEFFECT IN APP COMPONENT! ========================================')
  }, [])

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
    <div className="App" onClick={onRequest}>
      <Header>
        <h2>NAVIGATION GOES HERE</h2>
      </Header>
      <Outlet />
    </div>
  );
}

export default App;
