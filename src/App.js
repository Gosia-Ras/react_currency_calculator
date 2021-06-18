import Container from "./Container";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Form from "./Form";
import Footer from "./Footer";


function App() {
  return (
    <Container>
       <Header title="Currency Calculator" />
       <Paragraph title="Currency rates 18.06.21 from the site of Polish National Bank"/>
       <Form />
       <Footer title="Copyright 2021 by Malgorzata Ras. All rights reserved." />
    </Container>
  );
}

export default App;
