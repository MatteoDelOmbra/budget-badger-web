import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 100vh;
  grid-template-areas: "navbar main";
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.primary};
`;
