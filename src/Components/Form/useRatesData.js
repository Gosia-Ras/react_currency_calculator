import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesStore, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN&symbols=USD,CHF,EUR,RUB,CZK,SEK,CNY,JPY"
        );
        console.log(response.data);

        const { rates, date } = await response.data;

        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(getRates, 1500);
  }, []);

  return ratesStore;
};
