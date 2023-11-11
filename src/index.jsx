import React from 'react';
import ReactDOM from 'react-dom/client';
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './index.css';
import App from './App'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <BottomTapLayout />,
//     children: [
//       { path: "/", element: <HomeScreen /> },
//       { path: "/Problem", element: <ProblemScreen /> },
//       { path: "/Store", element: <HomeScreen /> },
//       { path: "/My", element: <HomeScreen /> },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
