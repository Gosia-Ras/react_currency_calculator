import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: whitesmoke;
  border-radius: 25px;
  box-shadow: 10px 10px 13px -7px #777576;
  padding: 15px;
  max-height: 100vh;
  margin-top: 40px;

  @media (max-width: 320px) {
    max-height: fit-content;
    background-color: #f5f5f5d6;
  };
`
