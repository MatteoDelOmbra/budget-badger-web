import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@utils/router";
import { AuthProvider } from "@components/authorization/AuthProvider";
import { ThemeProvider } from "@components/theme/ThemeProvider";
import { GlobalStyle } from "@styles/global";
import "@theme-toggles/react/css/Within.css";
import "@services/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
