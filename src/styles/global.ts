import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}

*{
  font-family: Thasadith;
  color: ${(props) => props.theme.primaryText};
}
`;
