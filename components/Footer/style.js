import styled, { css } from "styled-components";

export const FooterWrapper = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    height: 10vh;
  }
`;

export const FooterContent = styled.div`
  width: 90%;
  @media screen and (min-width: 768px) {
    display: flex;
    div {
      flex-grow: 1;
    }
  }
`;

export const FooterRow = styled.div`
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: 2rem;
    `}
`;

