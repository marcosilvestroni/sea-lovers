import Text from "components/Text";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ContactsWrapper } from "./styles";

const Contacts = () => {
  return (
    <ContactsWrapper>
      <Text tag="h2" variant="header">
        Contattaci
      </Text>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name and surname" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmailTextarea">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Contact Us
        </Button>
      </Form>
    </ContactsWrapper>
  );
};

export default Contacts;

