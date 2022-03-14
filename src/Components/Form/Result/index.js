import { StyledResult } from "./styled";

export const Result = ({ result }) => (
  <StyledResult>
    {result && (
      <>
        You receive&nbsp;
        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
      </>
    )}
  </StyledResult>
);

export default Result;
