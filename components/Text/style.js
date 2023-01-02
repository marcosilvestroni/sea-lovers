import styled, { css } from "styled-components";

export const Text = styled.span`
  ${({ variant }) => {
    switch (variant) {
      case "heading":
        return css`
          font-weight: bold;
        `;
      case "sub-heading":
        return css`
          font-weight: bold;
        `;
      case "menu-item":
        return css`
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

