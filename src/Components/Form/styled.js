import styled from "styled-components";

export const StyledForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledFieldset = styled.fieldset`
  border: none;
  margin: 20px 0px;
  font-size: smaller;
`;

export const StyledSelect = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 5px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const CurrencySpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-shadow: 1px 1px ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.buttonDefault};
  font-size: 14px;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontMain};
  padding: 10px;
  max-width: 300px;
  margin-top: 5px;
  transition: background-color 0.5s, color 0.5s linear;
  box-shadow: 5px 5px 20px -9px #636e72;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBlue};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CurrencyInfo = styled.p`
  text-align: center;
  text-shadow: 1px 1px ${({ theme }) => theme.colors.darkGrey};
`;

export const Failure = styled.p`
  color: ${({ theme }) => theme.colors.shadowError};
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  text-shadow: 1px 1px ${({ theme }) => theme.colors.darkGrey};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.hoverBlue};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.fontMain};
  }
`;
