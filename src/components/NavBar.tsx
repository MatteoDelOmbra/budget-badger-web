import styled from "styled-components";
import { useAuth } from "./AuthProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "@utils/router";

const StyledNavBar = styled.div``;

export function NavBar() {
  const userCtx = useAuth();
  const navigate = useNavigate();
  const [navTxt, setNavTxt] = useState<string>("");

  useEffect(() => {
    if (userCtx.isSignedIn()) {
      setNavTxt("Logged in NavBar");
    } else {
      setNavTxt("Not logged in Navbar");
    }
  }, [userCtx]);

  const onClickHandler = () => {
    userCtx.signout();
    navigate(paths.sigin);
  };

  return (
    <StyledNavBar>
      <p>
        {navTxt}
        {userCtx.isSignedIn() && (
          <button onClick={onClickHandler}>logout</button>
        )}
      </p>
    </StyledNavBar>
  );
}
