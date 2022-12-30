import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  height: 5rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  opacity: 0.3;
  z-index: 1000;
`;

export const MenuItem = styled.a`
  padding: 1rem 2rem;
  color: black;
  display: block;
`;

