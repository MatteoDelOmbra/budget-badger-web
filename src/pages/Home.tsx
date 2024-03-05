import { Add } from "@components/Add";
import { MainContainer } from "@components/MainContainer";
import { NavBar } from "@components/NavBar";
import { PageWrapper } from "@components/PageWrapper";

export function Home() {
  return (
    <>
      <PageWrapper>
        <NavBar>navbar here</NavBar>
        <MainContainer>Main</MainContainer>
        <Add>Add</Add>
      </PageWrapper>
    </>
  );
}
