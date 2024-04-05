import styled from "styled-components";
import { useAuth } from "../authorization/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "@utils/router";
import { ThemeToggle } from "../theme/ThemeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { PrimaryBtn } from "@components/ui/PrimaryButton";

const StyledNavbar = styled.div`
  grid-area: navbar;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavbarLink = styled(Link)`
  width: 100%;
  color: ${(props) => props.theme.secondaryText};
  text-align: center;
  text-decoration: none;
  padding-top: 5px;
  padding-bottom: 5px;
  &:hover {
    background-color: ${(props) => props.theme.secondaryHover};
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export function Navbar() {
  const { t } = useTranslation();

  const userContext = useAuth();
  const navigate = useNavigate();

  const onClickHandler = () => {
    userContext.signout();
    navigate(paths.signIn);
  };

  return (
    <StyledNavbar>
      <TopContainer>
        <Logo />
        {userContext.isSignedIn() && (
          <>
            <div>{t("Navbar.BudgetName")}</div>
            <PrimaryBtn>{t("Navbar.NewTranscationButton")}</PrimaryBtn>
            <NavbarLink to={paths.dashboard}>
              {t("Navbar.Dashboard")}
            </NavbarLink>
            <NavbarLink to={paths.summary}>{t("Navbar.Summary")}</NavbarLink>
            <NavbarLink to={paths.payoffs}>{t("Navbar.Payoffs")}</NavbarLink>
            <NavbarLink to={paths.settings}>
              {t("Navbar.BudgetSettings")}
            </NavbarLink>
            <NavbarLink to={paths.myProfile}>
              {t("Navbar.MyProfile")}
            </NavbarLink>

            <PrimaryBtn onClick={onClickHandler}>
              {t("Navbar.Logout")}
            </PrimaryBtn>
          </>
        )}
        {!userContext.isSignedIn() && (
          <>
            <NavbarLink to={paths.signIn}>{t("Navbar.Signin")}</NavbarLink>
            <NavbarLink to={paths.register}>{t("Navbar.Register")}</NavbarLink>
          </>
        )}
      </TopContainer>

      <BottomContainer>
        <ThemeToggle />
        <LanguageSwitcher />
      </BottomContainer>
    </StyledNavbar>
  );
}
