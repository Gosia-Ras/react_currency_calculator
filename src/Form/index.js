import { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";

export const Form = ({calculateResult, setResult}) => {
  const [currency, setCurrency] = useState(currencies[0].short);

  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const onClickReset = (event) => {
    event.preventDefault();
    setAmount("");
    setResult();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <label className="form__label">
          <p>Amount in PLN*:</p>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            step="any"
            min="1"
            max="1000000000"
            className="form__field"
            placeholder="Enter the amount in PLN"
            type="number"
            required
          />
        </label>
        <label className="form__label">
          <p>Currency</p>
          <select
            className="form__field"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.short}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
      <div className="flexContainer">
        <button className="form__button" type="submit">
          Calculate
        </button>
        <button type="reset" className="form__button" onClick={onClickReset}>
          Clear form
        </button>
      </div>
    </form>
  );
};
