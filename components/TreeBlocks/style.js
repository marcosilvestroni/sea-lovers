import styled from "styled-components";

export const ThreeBlocksWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    div {
      flex-grow: 1;
      flex-basis: 30%;
    }
  }
`;

export const TBItem = styled.div`
  height: 30vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TBText = styled.div`
  text-align: center;
`;

