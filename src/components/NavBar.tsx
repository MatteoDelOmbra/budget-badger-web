import styled from "styled-components";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { paths } from "@utils/router";

const StyledNavBar = styled.div``;

export function NavBar() {
  const userCtx = useAuth();
  const navigate = useNavigate();

  const onClickHandler = () => {
    userCtx.signout();
    navigate(paths.sigin);
  };

  return (
    <StyledNavBar>
      <div>logo</div>
      {userCtx.isSignedIn() && (
        <>
          <div>Il Bilancio</div>
          <button>Nowa transakcja</button>
          <div>marzec 24</div>
          <div>Rozliczenia</div>

          <div>Ustawienia budżetu</div>
          <div>Mój profil</div>

          <button onClick={onClickHandler}>logout</button>

          <div>Zmień motyw</div>
          <div>Zmień język</div>
        </>
      )}
      {!userCtx.isSignedIn() && (
        <>
          <div>Sign in</div>
          <div>Register</div>
        </>
      )}
    </StyledNavBar>
  );
}
