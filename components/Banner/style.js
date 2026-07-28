import styled, { keyframes } from "styled-components";

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.7rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroShell = styled.div`
  position: relative;
`;

export const HeroMedia = styled.div`
  position: relative;
  min-height: clamp(30rem, 70vh, 42rem);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  overflow: hidden;
  margin-top: var(--header-height);

  img {
    object-fit: cover;
  }
`;

export const TextWapper = styled.div`
  max-width: 88%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-height: clamp(30rem, 70vh, 42rem);
  color: white;
  text-align: center;
  position: relative;
  z-index: 2;
  margin: 0 auto;
  gap: 0.55rem;

  h1,
  h2 {
    animation: ${riseIn} 520ms ease-out both;
  }

  h2 {
    animation-delay: 120ms;
  }

  h1 {
    font-size: clamp(2rem, 11vw, 3.5rem);
  }

  h2 {
    font-size: clamp(1rem, 4.4vw, 1.35rem);
  }
`;

export const ChipRow = styled.div`
  display: flex;
  gap: 0.45rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.2rem 0 0.65rem;
  animation: ${riseIn} 560ms ease-out both;
  animation-delay: 220ms;

  span {
    border: 1px solid rgba(255, 255, 255, 0.34);
    background: rgba(12, 35, 42, 0.34);
    border-radius: 999px;
    padding: 0.32rem 0.64rem;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.02em;
  }
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${riseIn} 640ms ease-out both;
  animation-delay: 290ms;

  a {
    border-radius: 999px;
    padding: 0.58rem 0.95rem;
    font-weight: 800;
    font-size: 0.88rem;
    letter-spacing: 0.01em;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  a:first-child {
    background: var(--cta);
    color: var(--cta-ink);
  }

  a:last-child {
    background: rgba(255, 255, 255, 0.9);
    color: var(--ink-1);
  }
`;

export const HeroCard = styled.div`
  width: min(92vw, 48rem);
  margin: -1.6rem auto 0;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid var(--line-soft);
  box-shadow: var(--shadow-soft);
  padding: 1rem 1.1rem;
  position: relative;
  z-index: 3;
  animation: ${riseIn} 680ms ease-out both;
  animation-delay: 280ms;

  p {
    margin-bottom: 0;
    font-size: 0.95rem;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

