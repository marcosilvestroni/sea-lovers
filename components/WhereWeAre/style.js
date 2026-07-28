import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin: calc(var(--header-height) + 1rem) auto 0;
  width: min(var(--form-max), calc(100% - 1.5rem));
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(19, 50, 58, 0.12);
  border-radius: 1.2rem;
  background: rgba(255, 255, 255, 0.82);

  a {
    font-weight: 700;
    color: #1f6c79;
  }

  @media screen and (min-width: 768px) {
    padding: 1.2rem;
  }
`;

