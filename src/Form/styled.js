import styled from "styled-components";

export const StyledForm = styled.form`
  margin-top: 20px;
  font-family: "Lato", sans-serif;
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid grey;
  border-radius: 5px;
  margin: 20px 0px;
  background-color: rgb(245, 245, 245);
  font-size: smaller;
`;

export const StyledSelect = styled.select`
  padding: 10px;
  background-color: white;
  border-radius: 4px;
`;
export const StyledInput = styled.input`
  padding: 10px;
  background-color: white;
  border-radius: 4px;

  &:required {
    border-color: rgb(224, 107, 107);
  }
`;

export const StyledLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: darkgrey;
  padding: 10px;
  max-width: 300px;
  margin-top: 5px;
  transition: background 1s;

  &:hover {
    background-color: rgb(129, 126, 127);
    color: lavenderblush;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;