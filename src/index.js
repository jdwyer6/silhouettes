import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, browserRouter } from 'react-router-dom';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import 'font-awesome/css/font-awesome.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);


