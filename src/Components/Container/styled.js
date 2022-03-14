import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundBlue};
  border-radius: 25px;
  padding: 15px;
  max-width: 70vh;
  margin: 0 auto;
  margin-top: 150px;
  box-shadow: 5px 5px 20px -9px #636e72;

  @media (max-width: 480px) {
    margin-bottom: 30px;
    margin-top: 30px;
  } ;
`;
