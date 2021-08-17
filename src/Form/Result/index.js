import "./style.css";

export const Result = ({ result }) => (
  <p className="resultParagraph">
    {result && (
      <>
        <strong>
          You receive&nbsp;
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);
