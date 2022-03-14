import styled from "styled-components";
import { ErrorCircle } from "@styled-icons/boxicons-solid/ErrorCircle";

export const ErrorBox = styled.div`
  height: 200px;
  padding: 30px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export const ErrorIcon = styled(ErrorCircle)`
  color: ${({ theme }) => theme.colors.errorYellow};
  width: 50px;
`;
