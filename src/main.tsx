import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";

const themeGlobal = {
  borderStyle: "solid",
};

const themeLight = {
  ...themeGlobal,
  main: "yellow",
};

const themeDark = {
  ...themeGlobal,
  main: "gray",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
