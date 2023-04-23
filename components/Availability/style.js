import styled from "styled-components";

export const AvailabilityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;

  margin-top: var(--header-height);

  .rdrDefinedRangesWrapper {
    display: none;
  }
  textarea {
    resize: none;
  }

  .formFields {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FieldsWrapper = styled.div`
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

