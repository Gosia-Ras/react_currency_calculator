import styled, { keyframes } from "styled-components";
import { ReactComponent as loading } from "../../../Images/icon-spinner.svg";

export const LoaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoaderText = styled.p`
  text-align: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderSpinner = styled(loading)`
  animation: ${rotate} 1s linear infinite;
  margin: 0 auto;
  padding: 40px;
`;
