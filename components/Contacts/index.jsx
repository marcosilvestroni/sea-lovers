import { useRef } from "react";
import Text from "components/Text";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ContactsWrapper } from "./styles";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l16ych6",
        "template_qw0mng5",
        form.current,
        "t2hoJ3fXacWUzi3IY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactsWrapper>
      <Text tag="h2" variant="header">
        Contattaci
      </Text>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name and surname"
            name="user_name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="user_email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmailTextarea">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="user_message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Contact Us
        </Button>
      </Form>
    </ContactsWrapper>
  );
};

export default Contacts;

