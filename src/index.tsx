import React from 'react';
import ReactDOM from 'react-dom/client';
import './vendor/index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLFormElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
