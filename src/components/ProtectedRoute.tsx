import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { paths } from "@utils/router";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const userContext = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userContext.isSignedIn()) {
      navigate(paths.sigin, { replace: true });
    }
  }, [navigate, userContext]);
  return children;
}
