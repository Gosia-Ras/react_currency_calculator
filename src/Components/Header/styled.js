import styled from "styled-components";

export const StyledHeader = styled.header`
  text-align: center;
  padding: 10px;
  font-weight: bold;
  margin: 5px;
  text-shadow: 1px 1px ${({ theme }) => theme.colors.darkGrey};
`;
