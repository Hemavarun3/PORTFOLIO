import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import About from './components/About/about';
import Intro from './components/Intro/intro';
import Project from './components/projects/projects';


const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children :[{
        path: "about",
      element: <About />
      },
      {
        path: "",
      element: <Intro />
      },
      {
        path: "projects",
      element: <Project />
      },]
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routes} />
);
