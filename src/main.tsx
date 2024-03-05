import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themeDark } from "@styles/themes.ts";
import { router } from "@utils/router";
import "@services/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
