import styled from "styled-components";

export const MenuContainer = styled.div`
  .bm-burger-button {
    width: 2rem;
    height: 2rem;
    position: relative;
  }

  .bm-burger-bars {
    background: #13323a;
    border-radius: 999px;
    height: 16% !important;
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
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  .bm-menu {
    background: linear-gradient(180deg, #fff5e7 0%, #e3f5f7 100%);
    padding: 1.4rem 1rem 1rem;
    font-size: 1rem;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #fff5e7;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #13323a;
    padding: 0.6rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
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
  }
`;

export const MenuItem = styled.a`
  padding: 1rem 2rem;
  color: black;
  display: block;
`;

