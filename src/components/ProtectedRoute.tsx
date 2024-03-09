import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { paths } from "@utils/router";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const userCtx = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userCtx.isSignedIn()) {
      navigate(paths.sigin, { replace: true });
    }
  }, [navigate, userCtx]);
  return children;
}
