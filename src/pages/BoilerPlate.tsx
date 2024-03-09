import { useAuth } from "@components/AuthProvider";
import { NavBar } from "@components/NavBar";
import { PageWrapper } from "@components/PageWrapper";
import { paths } from "@utils/router";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export function BoilerPlate() {
  const navigate = useNavigate();
  const location = useLocation();
  const userCtx = useAuth();
  useEffect(() => {
    if (location.pathname == "/")
      if (userCtx.isSignedIn()) {
        navigate(paths.dashboard);
      } else {
        navigate(paths.sigin);
      }
  });
  return (
    <PageWrapper>
      <NavBar />
      {!Outlet && <p>This is empty index</p>}
      <Outlet />
    </PageWrapper>
  );
}
