import { useState } from "react";
import "./style.css";
import { Result } from "./Result";
import { currencies } from "../currencies";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <div className="gridContainer">
          <p>
            <label>
              <span className="form__labelText">PLN*</span>
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
          </p>
          <p>
            <label>
              <span className="form__labelText">Currency</span>
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
          </p>
        </div>
      </fieldset>
      <div className="flexContainer">
      <button className="form__button" type="submit">
        Calculate
      </button>
      <Result result={result} />
      </div>
    </form>
  );
};
