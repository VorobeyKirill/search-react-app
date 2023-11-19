import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Search } from './pages/SearchPage/Search.page';
import { Media } from './pages/MediaPage/Media.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "/media/:mediaId",
    element: <Media />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
