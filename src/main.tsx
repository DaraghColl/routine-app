import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RoutineItemsStateProvider } from './state/RoutineItemsState';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutineItemsStateProvider>
      <RouterProvider router={router} />
    </RoutineItemsStateProvider>
  </React.StrictMode>,
);
