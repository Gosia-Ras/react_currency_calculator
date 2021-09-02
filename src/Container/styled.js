import styled from "styled-components";

export const StyledContainer = styled.main`
  background-color: whitesmoke;
  border-radius: 25px;
  box-shadow: 10px 10px 13px -7px #777576;
  max-width: 480px;
  padding: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 100%;
  };
`
