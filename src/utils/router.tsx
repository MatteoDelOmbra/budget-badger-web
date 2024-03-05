import { createBrowserRouter } from "react-router-dom";
import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { Settings } from "@pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);
