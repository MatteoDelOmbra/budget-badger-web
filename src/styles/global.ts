import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: Thasadith;
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.primary};
}
`;
