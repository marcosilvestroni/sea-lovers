import styled, { keyframes } from "styled-components";

const cardRise = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.8rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ThreeBlocksWrapper = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  max-width: 1160px;
  margin: 0 auto 2.4rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const TBCard = styled.article`
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  animation: ${cardRise} 520ms ease-out both;

  &:nth-child(2) {
    animation-delay: 90ms;
  }

  &:nth-child(3) {
    animation-delay: 170ms;
  }

  @media screen and (min-width: 992px) {
    transition: transform 220ms ease, box-shadow 220ms ease;

    &:hover {
      transform: translateY(-0.25rem);
      box-shadow: 0 14px 28px rgba(20, 39, 45, 0.14);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`;

export const TBImgWrapper = styled.div`
  position: relative;
  min-height: 11rem;

  img {
    object-fit: cover;
  }
`;

export const TBItem = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(20, 43, 49, 0.06),
    rgba(20, 43, 49, 0.48)
  );
`;

export const TBText = styled.div`
  text-align: left;
  color: var(--ink-1);

  h3 {
    margin-bottom: 0.2rem;
  }
`;

export const TBCardBody = styled.div`
  padding: 1rem;
  display: grid;
  gap: 0.7rem;

  a {
    border-radius: 999px;
    background: #ffffff;
    border: 1px solid var(--line-soft);
    padding: 0.48rem 0.8rem;
    display: inline-flex;
    width: fit-content;
    font-weight: 800;
    color: var(--ink-1);
  }
`;

