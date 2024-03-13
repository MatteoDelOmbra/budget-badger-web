import styled from "styled-components";
import { useAuth } from "./authorization/AuthProvider";
import { useNavigate } from "react-router-dom";
import { paths } from "@utils/router";
import { ThemeToggle } from "./theme/ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwittcher";
import { useTranslation } from "react-i18next";

const StyledNavBar = styled.div``;

export function NavBar() {
  const { t } = useTranslation();

  const userContext = useAuth();
  const navigate = useNavigate();

  const onClickHandler = () => {
    userContext.signout();
    navigate(paths.sigin);
  };

  return (
    <StyledNavBar>
      <div>{t("Navbar.LogoInfo")}</div>
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
      <ThemeToggle />
      <LanguageSwitcher />
    </StyledNavBar>
  );
}
