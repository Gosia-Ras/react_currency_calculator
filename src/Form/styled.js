import styled from "styled-components";
import loading from "../loading.svg";

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
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 4px #dadada;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;

  &:hover {
    background-image: linear-gradient(45deg, #343f51 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, #343f51 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 4px #dadada;

  &:required {
    border: 1px grey solid;
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
  background-color: #343f51;
  color: lightgrey;
  padding: 10px;
  max-width: 300px;
  margin-top: 5px;
  transition: background 1s;

  &:hover {
    background-color: #3d4f66;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CurrencyInfo = styled.p`
  text-align: center;
  font-size: smaller;
`;

export const Loading = styled.p`
  color: black;
  background-image: url(${loading});
  background-repeat: no-repeat;
  height: 150px;
  width: 100%;
  background-position: center;
  text-align: center;
`;

export const Failure = styled.p`
  color: red;
  text-align: center;
`;

export const Link = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #343F51;
  }
`;
