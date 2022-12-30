import styled, { css } from "styled-components";

export const Text = styled.span`
  ${({ variant }) => {
    switch (variant) {
      case "heading":
        return css`
          font-size: 4rem;
          font-weight: bold;
        `;
      case "sub-heading":
        return css`
          font-size: 2rem;
          font-weight: bold;
        `;
      case "menu-item":
        return css`
          font-size: 1rem;
          font-weight: bold;
          :hover {
            text-decoration: underline;
          }
        `;
      default:
        css``;
    }
  }}
`;

