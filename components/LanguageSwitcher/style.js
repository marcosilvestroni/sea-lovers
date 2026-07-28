import styled, { css } from "styled-components";

export const ListLang = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.15rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--line-soft);
`;

export const ItemLang = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  border-radius: 999px;
  transition: background-color 140ms ease, transform 140ms ease;

  :hover {
    transform: translateY(-1px);
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: rgba(255, 106, 61, 0.18);
      box-shadow: inset 0 0 0 1px rgba(255, 106, 61, 0.4);
    `}
`;

