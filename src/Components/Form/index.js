import { useState } from "react";
import {
  StyledButton,
  StyledFieldset,
  StyledForm,
  StyledLabel,
  StyledFlex,
  Loading,
  Failure,
  StyledInput,
  StyledSelect,
  CurrencyInfo,
  Link,
} from "./styled";
import { Result } from "./Result";

import { useRatesData } from "./useRatesData";

export const Form = (date) => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const onReset = (event) => {
    event.preventDefault();
    setAmount("");
    setResult();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      {ratesData.state === "loading" ? (
        <Loading>
          Loading the data from the European Central Bank <br />
          Please wait...
        </Loading>
      ) : ratesData.state === "error" ? (
        <Failure>
          Something went wrong! <br />
          Please check your internet connection and reload the page
        </Failure>
      ) : (
        <>
          <StyledFieldset>
            <StyledLabel>
              <p>Amount in PLN*:</p>
              <StyledInput
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                step="any"
                min="1"
                max="1000000000"
                placeholder="Amount in PLN"
                type="number"
                required
              />
            </StyledLabel>
            <StyledLabel>
              <p>Currency</p>

              <StyledSelect
                as="select"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {Object.keys(ratesData.rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </StyledSelect>
            </StyledLabel>
          </StyledFieldset>

          <StyledFlex>
            <StyledButton type="submit">Calculate</StyledButton>
            <StyledButton type="reset" onClick={onReset}>
              Clear form
            </StyledButton>
          </StyledFlex>
        </>
      )}
      <Result result={result} calculateResult={calculateResult} />
      <CurrencyInfo>
        Currency rates from the{" "}
        <Link
          title="European Central Bank"
          rel="noreferrer noopener"
          target="_blank"
          href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
        >
          European Central Bank
        </Link>
      </CurrencyInfo>
    </StyledForm>
  );
};
