import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import routes from './routes';
import { Route, BrowserRouter, Routes, NavLink } from 'react-router';
import HeaderComponent from './components/header/HeaderComponent';

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderComponent>
        {routes.map((route) => (
          <NavLink key={route.path} to={route.path}>{route.name}</NavLink>
        ))}
      </HeaderComponent>
      <Routes className="content">
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
