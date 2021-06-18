import { useState } from "react";
import Result from "./Result";
import "./style.css";

const Form = () => {
  const currencies = [
    {
      id: "EUR",
      name: "Euros",
      rate: 4.1,
    },

    {
      id: "CHF",
      name: "Swiss Francs",
      rate: 4.2,
    },

    {
      id: "USD",
      name: "US Dollars",
      rate: 3.9,
    },

    {
      id: "GBP",
      name: "British Pounds",
      rate: 5.2,
    },

    {
      id: "RUB",
      name: "Russian roubles",
      rate: 0.05,
    },
  ];

  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].id);
  const [result, setResult] = useState();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const currency = currencies.find(({ id }) => id === selectedCurrency);
    const result = calculateResult(amount, currency.rate);
    setResult({ value: result, currency: currency.id });
  };

  const calculateResult = (amount, rate) => {
    return amount / rate;
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <p>
          <label>
            <span className="form__labelText">PLN*</span>
            <input
              step="any"
              min="1"
              max="1000000000"
              className="form__field"
              placeholder="Enter the amount in PLN"
              type="number"
              required
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">Currency</span>
            <select
              className="form__field"
              value={selectedCurrency}
              onChange={({ target }) => setSelectedCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.id} value={currency.id}>
                  {currency.id}
                </option>
              ))}
            </select>
          </label>
        </p>
      </fieldset>
      <button className="form__button" type="submit">
        Calculate
      </button>
      <Result setResult={setResult} result={result} />
    </form>
  );
};

export default Form;
