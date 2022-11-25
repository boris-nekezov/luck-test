import { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
  Outlet,
} from 'react-router-dom';
import axios from 'axios';
import { Button } from '@luck-test/ui-kit';

import HomePage from './pages/Home/Home';
import AccountPage from './pages/Account/Account';
import TestsPage from './pages/Tests/Tests';
import PrivateRoutes from './utils/PrivateRoutes';
import TestPage from './pages/Test/Test';

import { getUserProfile } from './features/user/userActions';
import { logout } from './features/user/userSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

import { Header } from '@luck-test/ui-kit';

import './App.scss';


function App() {
  const { userInfo, isAuthenticated } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch();

  const tokenLC = localStorage.getItem('accessToken');

  useEffect(() => {
    if (tokenLC) {
      dispatch(getUserProfile())
    }
  }, [dispatch, tokenLC]);

  return (
    <div className="App" >
      <BrowserRouter>
        <Header>
          <div className="user-info">
            <h3>
              {
                isAuthenticated ?
                  `Logged in as ${userInfo?.login}` :
                  `You're not logged in`
              }
            </h3>
          </div>
          <div className="cta">
            {
              userInfo && (
                <Button
                  type='button'
                  handleClick={() => dispatch(logout())}
                >Logout</Button>
              )

            }
          </div>
        </Header >

        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/account' element={<AccountPage />} />

          <Route element={<PrivateRoutes />} >

            <Route path='tests'>
              <Route index element={<TestsPage />} />
              <Route path=":testId" element={<TestPage />} />
            </Route>

          </Route>


        </Routes>
      </BrowserRouter>

      <Outlet />
    </div >
  );
}

export default App;
