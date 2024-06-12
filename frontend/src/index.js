import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
global.url = "https://gofood-oouh.onrender.com/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
