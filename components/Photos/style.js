import styled from "styled-components";

export const GalleryWrapper = styled.div`
  margin-top: var(--header-height);
  padding: 1.25rem 0.75rem 2rem;
  background: linear-gradient(180deg, #fff6e8 0%, #dff2f4 65%, #f5fffe 100%);

  @media screen and (min-width: 768px) {
    padding: 1.75rem 1.5rem 3rem;
  }
`;

export const GalleryHeader = styled.div`
  max-width: var(--page-max);
  margin: 0 auto 1rem;

  h1 {
    margin: 0;
    line-height: 1.1;
    font-size: clamp(1.7rem, 7vw, 2.35rem);
  }
`;

export const GalleryHint = styled.p`
  margin: 0.5rem 0 0;
  color: #26525e;
`;

export const NavList = styled.div`
  position: sticky;
  top: calc(var(--header-height) + 0.4rem);
  z-index: 2;
  display: flex;
  gap: 0.6rem;
  max-width: var(--page-max);
  margin: 0 auto 1rem;
  padding: 0.4rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(8px);
`;

export const NavLink = styled.a`
  flex: 1;
  text-align: center;
  padding: 0.6rem 0.75rem;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid rgba(24, 56, 67, 0.18);
  font-weight: 700;
  color: #183843;
`;

export const GallerySection = styled.section`
  max-width: var(--page-max);
  margin: 0 auto 1.4rem;
  scroll-margin-top: calc(var(--header-height) + 4rem);
  border-radius: 1.1rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.65);

  @media screen and (min-width: 768px) {
    padding: 1rem;
    margin-bottom: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 0.75rem;
  color: #183843;
  font-size: clamp(1.2rem, 5vw, 1.8rem);
`;

export const ThumbsGrid = styled.div`
  display: grid;
  gap: 0.45rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media screen and (min-width: 768px) {
    gap: 0.65rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const ThumbButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

export const ThumbImage = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.75rem;
  border: 1px solid rgba(24, 56, 67, 0.16);

  img {
    object-fit: cover;
    transition: transform 180ms ease;
  }

  ${ThumbButton}:hover & img {
    transform: scale(1.03);
  }
`;

export const FullscreenBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2100;
  background: rgba(8, 15, 19, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const FullscreenContent = styled.div`
  width: min(100%, 68rem);
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;

export const FullscreenImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  max-height: 80vh;

  img {
    object-fit: contain;
  }

  @media screen and (max-width: 767px) {
    aspect-ratio: 4 / 5;
  }
`;

export const FullscreenCounter = styled.div`
  color: #e8f4f7;
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 0.95rem;
  }

  span {
    font-size: 0.9rem;
    opacity: 0.92;
  }
`;

export const FullscreenFooter = styled.div`
  button {
    border: 1px solid rgba(255, 255, 255, 0.34);
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    border-radius: 999px;
    padding: 0.5rem 0.9rem;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const FullscreenClose = styled.button`
  position: fixed;
  top: 0.8rem;
  right: 0.8rem;
  border: 0;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 999px;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
`;

export const FullscreenNav = styled.button`
  position: fixed;
  top: 50%;
  ${({ $side }) => ($side === "left" ? "left: 0.8rem;" : "right: 0.8rem;")}
  transform: translateY(-50%);
  border: 0;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    top: auto;
    bottom: 1.2rem;
    transform: none;
  }
`;

