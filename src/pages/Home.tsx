import { MainContainer } from "@components/MainContainer";
import { NavBar } from "@components/NavBar";
import { PageWrapper } from "@components/PageWrapper";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();
  return (
    <>
      <PageWrapper>
        <NavBar>{t("Home.NavbarDescription")}</NavBar>
        <MainContainer>{t("Home.MainDescription")}</MainContainer>
      </PageWrapper>
    </>
  );
}
