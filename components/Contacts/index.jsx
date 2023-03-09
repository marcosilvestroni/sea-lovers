import { useRef, useState } from "react";
import Text from "components/Text";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ContactsWrapper } from "./styles";
import emailjs from "@emailjs/browser";
import { ReactComponent as Spinner } from "../../assets/img/6.svg";
import SendStatusResult from "components/SendStatusResult";

const Contacts = ({ t }) => {
  const form = useRef();
  const [loading, isLoading] = useState(false);
  const [sendStatus, setSendSatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    isLoading(true);

    emailjs
      .sendForm(
        "service_l16ych6",
        "template_qw0mng5",
        form.current,
        "t2hoJ3fXacWUzi3IY"
      )
      .then(
        (result) => {
          isLoading(false);

          setSendSatus(result.text);
        },
        (error) => {
          isLoading(false);

          setSendSatus(error.text);
        }
      );
  };

  return (
    <ContactsWrapper>
      <Text tag="h2" variant="header">
        Contattaci
      </Text>
      {loading ? (
        <Spinner />
      ) : sendStatus === "" ? (
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
      ) : (
        <SendStatusResult status={sendStatus} />
      )}
    </ContactsWrapper>
  );
};

export default Contacts;

