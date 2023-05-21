import styled, { css } from "styled-components";

export const ListLang = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ItemLang = styled.a`
  display: block;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #816e7c;
      padding: 0.3rem;
      border-radius: 0.3rem;
    `}
`;

