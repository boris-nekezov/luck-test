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

import AccountPage from './pages/Account/Account';
import TestsPage from './pages/Tests/Tests';
import PrivateRoutes from './utils/PrivateRoutes';
import TestDetailPage from './pages/Test/TestDetail';

import { getUserProfile } from './features/user/userActions';
import { logout } from './features/user/userSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectUser } from './features/user/userSelectors';

import { Header } from '@luck-test/ui-kit';

import './App.scss';


function App() {
  const { userInfo, isAuthenticated } = useAppSelector(selectUser)
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch]);

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

          <Route path='/account' element={<AccountPage />} />

          <Route element={<PrivateRoutes />} >

            <Route path='/'>
              <Route index element={<TestsPage />} />
              <Route path=":testId" element={<TestDetailPage />} />
            </Route>

          </Route>


        </Routes>
      </BrowserRouter>

      <Outlet />
    </div >
  );
}

export default App;
