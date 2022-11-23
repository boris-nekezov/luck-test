import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import axios from 'axios';

import { useAppSelector } from './app/hooks';
import { selectLogin, selectPassword } from './features/user/userSlice';

import HomePage from './pages/Home/Home';

import { Header } from '@luck-test/ui-kit';

import './App.scss';
import TestsPage from './pages/Tests/Tests';
import TestPage from './pages/Test/Test';

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
        <Header>
          <h2>NAVIGATION GOES HERE</h2>
        </Header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='tests'>
            <Route index element={<TestsPage />} />
            <Route path=":testId" element={<TestPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
