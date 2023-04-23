import styled from "styled-components";

export const ContactsWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem;

  @media screen and (max-width: 780px) {
    padding: 1rem;
    height: 75vh;
    max-width: initial;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
