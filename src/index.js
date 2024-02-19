import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from './ThemeProvider'; // Update the path as per your project structure
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider> {/* Wrap your App component with ThemeProvider */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
