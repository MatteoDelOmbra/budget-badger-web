import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export function Logo() {
  return (
    <StyledLogo>
      <img width={100} src="/badger.svg" alt="Logo" />
    </StyledLogo>
  );
}
