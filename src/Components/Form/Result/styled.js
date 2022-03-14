import styled from "styled-components";

export const StyledResult = styled.p`
  height: 40px;
  text-align: center;
  margin-top: 50px;
  background-color: #74b9ff;
  line-height: 2.5;
  color: #dfe6e9;
  font-weight: 700;
  letter-spacing: 0.05em;
  box-shadow: 5px 5px 20px -9px ${({ theme }) => theme.colors.darkGrey};
  text-shadow: 1px 1px ${({ theme }) => theme.colors.darkGrey};

  margin: 20px -15px;
`;
