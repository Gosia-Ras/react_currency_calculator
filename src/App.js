import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import { Form } from "./Form";
import Footer from "./Footer";
import Clock from "./Clock";
import Result from "./Result";
import { currencies } from "./currencies";


function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container>
      <Header title="Currency Calculator" />
      <Clock />
      <Form calculateResult={calculateResult} setResult={setResult} />
      <Result result={result} />
      <Footer title="Copyright 2021 by Malgorzata Ras. All rights reserved." />
    </Container>
  );
};

export default App;
