import styled from "styled-components";

export const ResultCard = styled.div`
  width: min(var(--form-max), calc(100% - 1.5rem));
  margin: 0 auto;
  padding: 1rem 1.1rem;
  border-radius: 1.1rem;
  border: 1px solid
    ${({ isSuccess }) =>
      isSuccess ? "rgba(30, 122, 87, 0.25)" : "rgba(177, 62, 38, 0.25)"};
  background: ${({ isSuccess }) =>
    isSuccess ? "rgba(239, 255, 247, 0.9)" : "rgba(255, 244, 241, 0.92)"};
  color: ${({ isSuccess }) => (isSuccess ? "#1e7a57" : "#9c3f2d")};
  font-weight: 700;
  text-align: center;
  box-shadow: var(--shadow-soft);
`;
