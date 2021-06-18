import "./style.css";

const Form = () => (
    <form className="form">
            <fieldset className="form__fieldset">
                <p>
                    <label>
                        <span className="form__labelText">Amount in PLN*:</span>
                        <input 
                            step="any" 
                            min="1" 
                            className="form__field"
                            placeholder="Enter the amount in PLN" 
                            type="number" 
                            required />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Currency:</span>
                        <select className="form__field">
                            <option value="">Pick the currency</option>
                            <option value="EUR">EUR</option>
                            <option value="CHF">CHF</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="RUB">RUB</option>
                        </select>
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button" type="submit">Calculate</button>
                <button className="form__button" type="reset">Reset</button>
            </p>
        </form>
);

export default Form;