import React from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Result from "./Result";
import Buttons from "./Buttons";

function App() {
  return (
    <Container>
      <Header title="Currency Calculator" />
      <Form />
      <Buttons />
      <Result />
      <Footer title="Copyright 2021 by Malgorzata Ras. All rights reserved." />
    </Container>
  );
}

export default App;
