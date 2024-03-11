import styled from "styled-components";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { paths } from "@utils/router";
import { ThemeSwitcher } from "./ThemeSwitcher";

const StyledNavBar = styled.div``;

export function NavBar() {
  const userContext = useAuth();
  const navigate = useNavigate();

  const onClickHandler = () => {
    userContext.signout();
    navigate(paths.sigin);
  };

  return (
    <StyledNavBar>
      <div>logo</div>
      {userContext.isSignedIn() && (
        <>
          <div>Il Bilancio</div>
          <button>Nowa transakcja</button>
          <div>marzec 24</div>
          <div>Rozliczenia</div>

          <div>Ustawienia budżetu</div>
          <div>Mój profil</div>

          <button onClick={onClickHandler}>logout</button>
        </>
      )}
      {!userContext.isSignedIn() && (
        <>
          <div>Sign in</div>
          <div>Register</div>
        </>
      )}
      <ThemeSwitcher />
      <div>Zmień język</div>
    </StyledNavBar>
  );
}
