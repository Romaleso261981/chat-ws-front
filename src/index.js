import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </Router>
);
