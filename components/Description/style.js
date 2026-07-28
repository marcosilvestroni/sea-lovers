import styled, { keyframes } from "styled-components";

const fadeLift = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.6rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const DescriptionWrapper = styled.div`
  padding: 2.2rem 1rem 1.2rem;

  @media screen and (min-width: 1024px) {
    padding: 3rem 1.4rem;
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 1.2rem;
    max-width: 1160px;
    margin: 0 auto;
  }
`;

export const DescriptionText = styled.div`
  background-color: rgba(255, 255, 255, 0.84);
  color: var(--ink-1);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  padding: 1rem;
  animation: ${fadeLift} 520ms ease-out both;

  @media screen and (min-width: 768px) {
    padding: 1.2rem;
  }
`;

export const DescriptionImage = styled.div`
  position: relative;
  min-height: 16rem;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 1rem;
  animation: ${fadeLift} 520ms ease-out both;

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
    min-height: auto;
  }
`;

export const DescriptionIntro = styled.div`
  margin-bottom: 1rem;

  p:last-child {
    margin-bottom: 0;
  }
`;

export const HighlightsGrid = styled.div`
  display: grid;
  gap: 0.75rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const HighlightTile = styled.article`
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-md);
  padding: 0.9rem;
  animation: ${fadeLift} 560ms ease-out both;

  &:nth-child(2) {
    animation-delay: 80ms;
  }

  &:nth-child(3) {
    animation-delay: 140ms;
  }

  &:nth-child(4) {
    animation-delay: 200ms;
  }

  p {
    margin-bottom: 0;
    font-size: 0.94rem;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

