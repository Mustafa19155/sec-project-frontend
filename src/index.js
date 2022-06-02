import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#27AB55",
    },
  },
  typography: {
    h1: {
      fontStyle: "normal",
      fontWeight: 900,
      // fontSize: "110px",
      linHeight: "100px",
      color: "white",
    },
    h4: {
      color: "white",
      // color: "#27AB55",
    },
    h5: {
      color: "black",
      // color: "#27AB55",
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
