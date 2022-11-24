import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import App from './App';
import AccountPage from './pages/Account/Account';
import TestsPage from './pages/Tests/Tests';
import TestPage from './pages/Test/Test';
import PrivateRoutes from './utils/PrivateRoutes';


import '@luck-test/ui-kit/dist/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route element={<PrivateRoutes />} >
              <Route path='tests'>
                <Route index element={<TestsPage />} />
                <Route path=":testId" element={<TestPage />} />
              </Route>
            </Route>

            <Route path='/account' element={<AccountPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
