import styled from "styled-components";

export const MenuContainer = styled.div`
  .menu-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(19, 50, 58, 0.2);
    box-shadow: 0 6px 14px rgba(17, 46, 54, 0.14);
    position: relative;
  }

  .menu-icon-burger::before,
  .menu-icon-burger::after {
    content: "";
    position: absolute;
    width: 0.95rem;
    height: 0.12rem;
    background: #13323a;
    border-radius: 999px;
  }

  .menu-icon-burger::before {
    transform: translateY(-0.18rem);
  }

  .menu-icon-burger::after {
    transform: translateY(0.18rem);
  }

  .menu-icon-close::before,
  .menu-icon-close::after {
    content: "";
    position: absolute;
    width: 0.95rem;
    height: 0.12rem;
    background: #13323a;
    border-radius: 999px;
  }

  .menu-icon-close::before {
    transform: rotate(45deg);
  }

  .menu-icon-close::after {
    transform: rotate(-45deg);
  }

  .bm-burger-button {
    width: 2rem;
    height: 2rem;
    position: relative;
  }

  .bm-burger-bars {
    background: #13323a;
    border-radius: 999px;
    height: 16% !important;
    display: none;
  }

  .bm-burger-bars-hover {
    background: #ff6a3d;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    position: relative;
    width: 2rem !important;
    height: 2rem !important;
    right: 0.1rem !important;
    top: 0.25rem !important;
  }

  .bm-cross {
    background: #13323a;
    display: none;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100dvh;
    top: 0;
    z-index: 2100 !important;
  }

  .bm-menu {
    background: linear-gradient(180deg, #fff5e7 0%, #e3f5f7 100%);
    padding: calc(var(--header-height) + env(safe-area-inset-top) + 0.45rem)
      1rem 1rem;
    font-size: 1rem;
    overflow-y: auto;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #fff5e7;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #13323a;
    padding: 0.6rem;
    margin-top: 0.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    max-height: calc(100dvh - var(--header-height) - 4.5rem);
    overflow-y: auto;
  }

  /* Individual item */
  .bm-item {
    display: block;
    text-decoration: none;
    color: #13323a;
    margin-bottom: 0;
    font-size: 1rem;
    font-style: normal;
    text-align: left;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.76);
    border: 1px solid rgba(19, 50, 58, 0.1);
    padding: 0.75rem 0.9rem;
    border-radius: 0.9rem;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(10, 32, 35, 0.28);
    z-index: 2050 !important;
    backdrop-filter: blur(2px);
  }

  @media screen and (max-width: 767px) {
    .bm-menu {
      width: 100vw !important;
    }

    .bm-menu-wrap {
      width: 100vw !important;
    }
  }
`;

export const MenuItem = styled.a`
  padding: 1rem 2rem;
  color: black;
  display: block;
`;

