import styled, { css } from "styled-components";
import { pxToRem } from "utils/styles";

export const Text = styled.span`
  ${({ variant }) => {
    switch (variant) {
      case "heading":
        return css`
          font-weight: bold;
          margin-bottom: 2rem;
        `;
      case "heading-shadow":
        return css`
          text-shadow: ${pxToRem(2)} ${pxToRem(2)} ${pxToRem(4)} black;
          font-weight: bold;
          margin-bottom: 2rem;
        `;
      case "sub-heading-shadow":
        return css`
          font-weight: bold;
          text-shadow: ${pxToRem(1)} ${pxToRem(1)} ${pxToRem(1)} black;
          margin-bottom: 2rem;
          font-style: italic;
        `;
      case "sub-heading":
        return css`
          font-weight: bold;
          margin-bottom: 2rem;
        `;
      case "menu-item":
        return css`
          font-weight: bold;
          :hover {
            text-decoration: underline;
          }
        `;

      case "sub-menu-item":
        return css`
          font-weight: bold;
          font-size: 0.9rem;
          :hover {
            text-decoration: underline;
          }
        `;
      case "title-bar":
        return css`
          font-weight: bold;
          padding: 3rem 1rem;
        `;
      default:
        css`
          font-size: 1rem;
          margin-bottom: 1rem;
        `;
    }
  }}
`;

