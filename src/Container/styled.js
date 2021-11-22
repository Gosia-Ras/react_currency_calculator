import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ theme}) => theme.color.primary};
  border-radius: 25px;
  box-shadow: 10px 10px 13px -7px ${({ theme}) => theme.color.tertiary};
  padding: 15px;
  margin-top: 40px;
`