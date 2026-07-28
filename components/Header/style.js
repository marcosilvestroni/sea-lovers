import styled, { css } from "styled-components";
import Link from "next/link";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.9rem;
  z-index: 1000;
  overflow: hidden;
  gap: 0.75rem;
  border-bottom: 1px solid transparent;
  transition: background-color 180ms ease, border-color 180ms ease,
    box-shadow 180ms ease;

  ${({ isOnTop }) =>
    !isOnTop &&
    css`
      background-color: rgba(238, 253, 255, 0.86);
      backdrop-filter: blur(8px);
      border-color: var(--line-soft);
      box-shadow: 0 4px 18px rgba(10, 41, 48, 0.08);
    `}
`;

export const ImageWrapper = styled.div`
  width: 3.1rem;
  height: 3.1rem;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow-soft);

  img {
    max-height: 100%;
    width: 100%;
    object-fit: cover;
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

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.55rem;

  @media screen and (max-width: 420px) {
    gap: 0.35rem;
  }
`;

export const CtaLink = styled(Link)`
  background-color: var(--cta);
  color: var(--cta-ink);
  border-radius: 999px;
  padding: 0.45rem 0.75rem;
  font-weight: 800;
  font-size: 0.83rem;
  letter-spacing: 0.02em;
  box-shadow: 0 10px 20px rgba(255, 106, 61, 0.32);
  transition: transform 160ms ease;

  :hover {
    transform: translateY(-1px);
  }

  @media screen and (min-width: 768px) {
    padding: 0.55rem 0.95rem;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
