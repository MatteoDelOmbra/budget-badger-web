import styled from "styled-components";

export const PrimaryBtn = styled.button`
  background-color: ${(props) => props.theme.secondary};
  &:hover {
    cursor: pointer;
  }
`;
