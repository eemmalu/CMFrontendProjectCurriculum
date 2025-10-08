import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// TODO: Import BrowserRouter from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* TODO: Wrap App in BrowserRouter */}
    <App />
  </React.StrictMode>
);
