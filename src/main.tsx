import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import Login from './Pages/Login/Index.tsx';
import Forum from './Pages/Forum/Index.tsx';
import Groups from './Pages/Groups/Index.tsx';
import GM from './Pages/Forum/GM/Index.tsx';
import FurtherReading from './Pages/Forum/FurtherReading/Index.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './Contexts/User.tsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/groups',
        element: <Groups />,
      },
      {
        path: '/forum/:id/:page',
        element: <Forum />,
      },
      {
        path: '/forum/gm/:id',
        element: <GM />,
      },
      {
        path: '/forum/further-reading/:id',
        element: <FurtherReading />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);
