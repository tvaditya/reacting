import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './globalStyles';
// import Home from './pages/Home';
import Routes from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
);


