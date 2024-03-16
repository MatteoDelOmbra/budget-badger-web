import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@utils/router";
import "@services/i18n/i18n";
import { AuthProvider } from "@components/authorization/AuthProvider";
import { ThemeProvider } from "@components/theme/ThemeProvider";
import { GlobalStyle } from "@styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
