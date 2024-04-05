import styled from "styled-components";

export const Selector = styled.select`
  background-color: ${(props) => props.theme.secondary};
  &:hover {
    cursor: pointer;
  }
`;
