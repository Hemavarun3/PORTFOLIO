import React from 'react';
import { createRoot } from 'react-dom'; // Importing createRoot from react-dom
import App from './App';


// Create your routes using createBrowserRouter


// Use createRoot to render your application
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);
