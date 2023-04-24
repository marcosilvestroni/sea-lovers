import styled from "styled-components";

export const MenuContainer = styled.div`
  .bm-burger-button {
    width: 2rem;
    height: 2rem;
    position: relative;
  }

  .bm-burger-bars {
    background: #373a47;
  }

  .bm-burger-bars-hover {
    background: #816e7c;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    position: relative;
    width: 2rem !important;
    height: 2rem !important;
  }

  .bm-cross {
    background: #bdc3c7;
    width: 2rem;
    height: 2rem;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  .bm-menu {
    background: #816e7c;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
    margin-top: 4rem;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    text-decoration: none;
    color: white;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-style: italic;
    text-align: center;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const MenuItem = styled.a`
  padding: 1rem 2rem;
  color: black;
  display: block;
`;

