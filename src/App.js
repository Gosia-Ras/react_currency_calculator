import Container from "./Components/Container";
import Header from "./Components/Header";
import { Form } from "./Components/Form";
import Footer from "./Components/Footer";
import Clock from "./Components/Clock";

function App() {
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
