import styled from "styled-components";

export const ContactsWrapper = styled.div`
  margin: 0 auto;
  width: min(var(--form-max), calc(100% - 1.5rem));
  padding: 1.25rem 0 2.5rem;

  @media screen and (min-width: 768px) {
    padding: 1.5rem 0 3rem;
  }
`;

export const ContactsCard = styled.div`
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(19, 50, 58, 0.12);
  border-radius: 1.2rem;
  padding: 1.1rem;
  box-shadow: 0 12px 24px rgba(16, 40, 46, 0.08);

  @media screen and (min-width: 768px) {
    border-radius: 1.4rem;
    padding: 1.5rem;
  }

  label {
    font-weight: 700;
    color: #18424c;
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
`;

export const ContactsHeader = styled.div`
  margin-bottom: 1.2rem;

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

export const FormHint = styled.p`
  margin: 0.35rem 0 0;
  font-size: 0.86rem;
  color: #2d6672;
`;

export const LoaderWrapper = styled.div`
  min-height: 10rem;
  display: grid;
  place-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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
    justify-content: flex-start;

    button {
      width: auto;
      min-width: 12rem;
    }
  }
`;
