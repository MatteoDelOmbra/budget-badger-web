import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "@pages/NotFound";
import { Boilerplate } from "@pages/Boilerplate";
import { SignIn } from "@pages/SignIn";
import { Dashboard } from "@pages/Dashboard";
import ProtectedRoute from "@components/authorization/ProtectedRoute";
import { Register } from "@pages/Register";
import { Summary } from "@pages/Summary";
import { Payoffs } from "@pages/Payoffs";
import { Settings } from "@pages/Settings";
import { MyProfile } from "@pages/MyProfile";

export const paths = {
  index: "/",
  signIn: "/sign-in",
  register: "/register",
  dashboard: "/dashboard",
  summary: "/summary",
  payoffs: "/payoffs",
  settings: "/settings",
  myProfile: "/my-profile",
};

export const router = createBrowserRouter([
  {
    path: paths.index,
    element: <Boilerplate />,
    errorElement: <NotFound />,
    children: [
      {
        path: paths.signIn,
        element: <SignIn />,
      },
      {
        path: paths.register,
        element: <Register />,
      },
      {
        path: paths.dashboard,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: paths.summary,
        element: (
          <ProtectedRoute>
            <Summary />
          </ProtectedRoute>
        ),
      },
      {
        path: paths.payoffs,
        element: (
          <ProtectedRoute>
            <Payoffs />
          </ProtectedRoute>
        ),
      },
      {
        path: paths.settings,
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
      {
        path: paths.myProfile,
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
