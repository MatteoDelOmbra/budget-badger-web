import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "@pages/NotFound";
import { Boilerplate } from "@pages/Boilerplate";
import { SignIn } from "@pages/SignIn";
import { Dashboard } from "@pages/Dashboard";
import ProtectedRoute from "@components/authorization/ProtectedRoute";

export const paths = {
  index: "/",
  dashboard: "/dashboard",
  sigin: "/sigin",
};

export const router = createBrowserRouter([
  {
    path: paths.index,
    element: <Boilerplate />,
    errorElement: <NotFound />,
    children: [
      {
        path: paths.sigin,
        element: <SignIn />,
      },
      {
        path: paths.dashboard,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
