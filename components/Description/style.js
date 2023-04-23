import styled from "styled-components";
export const DescriptionWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    div {
      flex-basis: 50%;
    }
  }
`;

export const DescriptionText = styled.div`
  background-color: #816e7c;
  color: white;
  padding: 5rem 1rem;
`;

export const DescriptionImage = styled.div`
  img {
    max-width: 100%;
    height: 100%;
  }
`;

