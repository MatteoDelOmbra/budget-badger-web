import { NavBar } from "@components/NavBar";
import { useAuth } from "@components/authorization/AuthProvider";
import { ContentWrapper } from "@components/wrappers/ContentWrapper";
import { PageWrapper } from "@components/wrappers/PageWrapper";
import { paths } from "@utils/router";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export function Boilerplate() {
  const navigate = useNavigate();
  const location = useLocation();
  const userContext = useAuth();

  useEffect(() => {
    if (location.pathname == "/")
      if (userContext.isSignedIn()) {
        navigate(paths.dashboard);
      } else {
        navigate(paths.sigin);
      }
  });
  return (
    <PageWrapper>
      <NavBar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </PageWrapper>
  );
}
