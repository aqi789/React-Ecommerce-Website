import React from 'react';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.css';
import { createRoot } from 'react-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
