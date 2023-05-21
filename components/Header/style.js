import styled, { css } from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 1000;
  overflow: hidden;
  gap: 1rem;

  ${({ isOnTop }) =>
    !isOnTop &&
    css`
      background-color: #f5f5dc8f;
    `}
`;

export const ImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;

  img {
    max-height: 100%;
    width: auto;
  }
`;

export const MenuWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
`;

export const Logo = styled.div`
  flex: 1;
`;
