import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Importing App component
import './index.css'; // Importing styles (if you have a CSS file)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />  {/* Rendering App component */}
  </React.StrictMode>
);
