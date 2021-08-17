import { useState } from "react";
import "./style.css";
import { Result } from "./Result";
import { currencies } from "../currencies";


export const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
    .find(({ short }) => short === currency)
    .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });

  }
  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const onClickReset = () => {
    setAmount("");
    setResult("");
};


  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
          <div className="flex-container">
          <p>
            <label>
              <span className="form__labelText flex-items">PLN*</span>
              <input
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                step="any"
                min="1"
                max="1000000000"
                className="form__field flex-items"
                placeholder="Enter the amount in PLN"
                type="number"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <span className="form__labelText flex-items">Currency</span>
              <select
                className="form__field flex-items"
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
      <button type="reset" className="form_button" onClick={onClickReset}>Clear form</button>
      </div>
    </form>
  );
};
