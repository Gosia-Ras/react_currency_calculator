import Container from "./Container";
import Header from "./Header";
import { Form } from "./Form";
import Footer from "./Footer";

function App () {

  return (
    <Container>
      <Header title="Currency Calculator" />
      <Form />
      <Footer title="Copyright 2021 by Malgorzata Ras. All rights reserved." />
    </Container>
  );
}

export default App;
