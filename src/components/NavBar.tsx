import styled from "styled-components";
import { useAuth } from "./authorization/AuthProvider";
import { useNavigate } from "react-router-dom";
import { paths } from "@utils/router";
import { ThemeToggle } from "./theme/ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const StyledNavBar = styled.div`
  grid-area: navbar;
`;

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
          <div>{t("Navbar.BudgetName")}</div>
          <button>{t("Navbar.NewTranscationButton")}</button>
          <div>{t("Navbar.Dashboard")}</div>
          <div>{t("Navbar.Summary")}</div>
          <div>{t("Navbar.Payoffs")}</div>

          <div>{t("Navbar.BudgetSettings")}</div>
          <div>{t("Navbar.MyProfile")}</div>

          <button onClick={onClickHandler}>{t("Navbar.Logout")}</button>
        </>
      )}
      {!userContext.isSignedIn() && (
        <>
          <div>{t("Navbar.Signin")}</div>
          <div>{t("Navbar.Register")}</div>
        </>
      )}
      <ThemeToggle />
      <LanguageSwitcher />
    </StyledNavBar>
  );
}
