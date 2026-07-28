import styled from "styled-components";

export const AvailabilityWrapper = styled.div`
  margin-top: var(--header-height);
  padding: 1.25rem 0.75rem 2.5rem;

  @media screen and (min-width: 768px) {
    padding: 1.75rem 1.5rem 3rem;
  }
`;

export const AvailabilityCard = styled.div`
  width: min(var(--page-max), 100%);
  margin: 0 auto;
  border: 1px solid rgba(19, 50, 58, 0.12);
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.88);
  padding: 1rem;
  box-shadow: 0 12px 24px rgba(16, 40, 46, 0.08);

  @media screen and (min-width: 768px) {
    border-radius: 1.4rem;
    padding: 1.25rem;
  }

  .rdrDefinedRangesWrapper {
    display: none;
  }

  label {
    color: #18424c;
    font-weight: 700;
  }

  input,
  textarea,
  .form-control {
    border: 1px solid rgba(24, 56, 67, 0.2);
    border-radius: 0.8rem;
    padding: 0.7rem 0.8rem;
  }

  input:focus,
  textarea:focus,
  .form-control:focus {
    border-color: #1f6c79;
    box-shadow: 0 0 0 0.2rem rgba(31, 108, 121, 0.16);
  }

  textarea {
    resize: vertical;
  }

  .formFields {
    width: 100%;
  }
`;

export const AvailabilityHeader = styled.div`
  margin-bottom: 1rem;

  h1 {
    margin: 0;
    color: #13323a;
    font-size: clamp(1.7rem, 7vw, 2.3rem);
    line-height: 1.1;
  }

  p {
    margin: 0.45rem 0 0;
    color: #2d6672;
  }
`;

export const CalendarCard = styled.div`
  width: 100%;
  border: 1px solid rgba(24, 56, 67, 0.14);
  border-radius: 1rem;
  padding: 0.4rem;
  background: #fff;
  overflow-x: auto;

  .rdrCalendarWrapper {
    width: 100%;
  }

  .rdrMonth {
    width: 100%;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 992px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FieldsWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 993px) {
    max-width: 28rem;
  }
`;

export const FormHint = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.86rem;
  color: #2d6672;
`;

export const ButtonWrapper = styled.div`
  ${({ isSticky }) =>
    isSticky &&
    `
      position: sticky;
      bottom: 0.5rem;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.95));
      padding-top: 0.6rem;
      z-index: 3;

      @media screen and (min-width: 768px) {
        display: none;
      }
    `}

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;

  button {
    width: 100%;
    border: 0;
    border-radius: 999px;
    background: linear-gradient(120deg, #ff7245 0%, #ff8f66 100%);
    color: #fff;
    font-weight: 800;
    padding: 0.82rem 1rem;
    box-shadow: 0 8px 16px rgba(255, 114, 69, 0.3);
  }

  @media screen and (min-width: 768px) {
    justify-content: ${({ isSticky }) => (isSticky ? "center" : "flex-start")};

    button {
      width: auto;
      min-width: 15rem;
    }
  }

  @media screen and (max-width: 767px) {
    ${({ isSticky }) =>
      !isSticky &&
      `
        display: none;
      `}
  }
`;

