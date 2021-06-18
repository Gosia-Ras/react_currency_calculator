import Container from "./Container";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Form from "./Form";

function App() {
  return (
    <Container>
       <Header title="Currency Calculator" />
       <Paragraph title="Currency rates 18.06.21 from the site of Polish National Bank"/>
       <Form />
    </Container>
  );
}

export default App;
