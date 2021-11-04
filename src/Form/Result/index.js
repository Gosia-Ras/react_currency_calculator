import { StyledResult } from "./styled";

export const Result = ({ result }) => (
  
  <StyledResult>
    {result && (
      <>
        <strong>
          You receive&nbsp;
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </StyledResult>
);

export default Result;