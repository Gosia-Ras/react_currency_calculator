import { useState } from "react";
import { currencies } from "../currencies";
import { StyledButton, StyledFieldset, StyledFlex, StyledForm, StyledInput, StyledLabel, StyledSelect } from "./styled";

export const Form = ({ calculateResult, setResult }) => {
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
    <StyledForm onSubmit={onSubmit}>
      <StyledFieldset>
        <StyledLabel>
          <p>Amount in PLN*:</p>
          <StyledInput
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            step="any"
            min="1"
            max="1000000000"
            placeholder="Enter the amount in PLN"
            type="number"
            required
          />
        </StyledLabel>
        <StyledLabel>
          <p>Currency</p>
          <StyledSelect
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.short}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
      </StyledFieldset>
      <StyledFlex>
        <StyledButton type="submit">Calculate</StyledButton>
        <StyledButton type="reset" onClick={onClickReset}>
          Clear form
        </StyledButton>
      </StyledFlex>
    </StyledForm>
  );
};
