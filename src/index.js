import React from 'react';
import { createRoot } from 'react-dom'; // Importing createRoot from react-dom
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/about';
import Intro from './components/Intro/intro';
import Project from './components/projects/projects';

// Create your routes using createBrowserRouter
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'home',
        element: <Intro />
      },
      {
        path: 'projects',
        element: <Project />
      }
    ]
  }
]);

// Use createRoot to render your application
const root = createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);
