import React from 'react';
import { BrowerRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63"
    }, 
    secondary: {
      main: "#e91e63"
  },
    info: {
      main: "#ccc"
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
