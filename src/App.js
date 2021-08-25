import Container from "./Container";
import Header from "./Header";
import { Form } from "./Form";
import Footer from "./Footer";
import Clock from "./Clock";


function App () {

  return (
    <Container>
      <Header title="Currency Calculator" />
      <Clock />
      <Form />
      <Footer title="Copyright 2021 by Malgorzata Ras. All rights reserved." />
    </Container>
  );
}

export default App;
