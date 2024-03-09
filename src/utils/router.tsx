import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "@pages/NotFound";
import { BoilerPlate } from "@pages/BoilerPlate";
import { SignIn } from "@pages/SignIn";
import { Dashboard } from "@pages/Dashboard";
import ProtectedRoute from "@components/ProtectedRoute";

export const paths = {
  index: "/",
  dashboard: "/dashboard",
  sigin: "/sigin",
};

export const router = createBrowserRouter([
  {
    path: paths.index,
    element: <BoilerPlate />,
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
