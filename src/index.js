import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'




// Use createRoot to render your application
const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);
