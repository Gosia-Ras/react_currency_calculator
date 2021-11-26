import styled from "styled-components";

export const StyledClock = styled.p`
  font-family: monospace;
  text-align: right;
  color: ${({ theme }) => theme.accent.clock};
  margin-right: 6px;
`;
