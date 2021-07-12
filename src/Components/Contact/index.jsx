import { Container, Col, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Container style={{ marginTop : "50px" }}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <ContactForm></ContactForm>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
