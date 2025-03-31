import React, { useEffect } from 'react';
import './App.css';
import routes from './routes';
import { Route, BrowserRouter, Routes, NavLink } from 'react-router';
import HeaderComponent from './components/header/HeaderComponent';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';


function App() {
  var isDark = useSelector((state) => state.theme.isDark);
  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);
  var theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className={isDark ? "dark" : ""}>
        <BrowserRouter>
          <HeaderComponent>
            {routes.map((route) => {
              if (route.show) {
                return <NavLink key={route.path} to={route.path}>{route.name}</NavLink>
              }
            })}
            <ToggleTheme />
          </HeaderComponent>
          <Routes className="content">
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App;
