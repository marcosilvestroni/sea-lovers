import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

export const PageSection = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  background-color: #0000001f;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
