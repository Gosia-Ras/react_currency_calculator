import "./style.css";

const Result = ({ result }) => (
    result !== undefined && (
        <p className="result">
            You receive {result.value.toFixed(2)} {result.currency}
        </p>
    )
);

export default Result;