import styled, { css } from "styled-components";
import { pxToRem } from "../../utils/styles";

export const Text = styled.span`
  margin: 0;

  ${({ variant }) => {
    switch (variant) {
      case "heading":
        return css`
          font-weight: bold;
          margin-bottom: 2rem;
        `;
      case "menu-heading":
        return css`
          font-size: 1.35rem;
          margin-bottom: 0.85rem;
          color: #13323a;
        `;
      case "heading-shadow":
        return css`
          text-shadow: ${pxToRem(2)} ${pxToRem(2)} ${pxToRem(4)}
            rgba(0, 0, 0, 0.32);
          font-weight: 700;
          margin-bottom: 0.5rem;
        `;
      case "heading-shadow-last":
        return css`
          text-shadow: ${pxToRem(2)} ${pxToRem(2)} ${pxToRem(4)}
            rgba(0, 0, 0, 0.32);
          font-weight: 700;
          margin-bottom: 1.5rem;
        `;
      case "sub-heading-shadow":
        return css`
          font-weight: 700;
          text-shadow: ${pxToRem(1)} ${pxToRem(1)} ${pxToRem(1)}
            rgba(0, 0, 0, 0.25);
          margin-bottom: 1rem;
          font-style: normal;
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
          font-size: 0.86rem;
          color: var(--ink-2);
          margin-top: 0.3rem;
          padding: 0 0.2rem;
        `;
      case "title-bar":
        return css`
          font-weight: bold;
          padding: 3rem 1rem;
        `;
      default:
        return css`
          font-size: 1rem;
          margin-bottom: 0.9rem;
          color: var(--ink-1);
        `;
    }
  }}
`;
