import styled from "styled-components";

export const StyledClock = styled.p`
  font-family: monospace;
  text-align: right;
  color: ${({ theme }) => theme.colors.clock};;
  margin-right: 6px;
  font-size: 14px;
`;
