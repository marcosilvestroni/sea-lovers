import { useRef, useState } from "react";
import Text from "../Text";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ButtonWrapper, ContactsWrapper } from "./styles";
import emailjs from "@emailjs/browser";
import SendStatusResult from "../SendStatusResult";
import Image from "next/image";

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
        {t("contactsTitle")}
      </Text>
      {loading ? (
        <Image src="/assets/img/6.svg" width={40} height={40} alt="spinner" />
      ) : sendStatus === "" ? (
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>{t("contactsName")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("contactsNamePlaceholder")}
              name="user_name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>{t("contactsEmail")}</Form.Label>
            <Form.Control
              type="email"
              placeholder={t("contactsEmailPlaceholder")}
              name="user_email"
              required
            />
            <Form.Text className="text-muted">
              {t("contactsEmailDisclaimer")}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmailTextarea">
            <Form.Label>{t("contactsMessage")}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="user_message"
              placeholder={t("contactsMessagePlaceholder")}
              required
            />
          </Form.Group>
          <ButtonWrapper>
            <Button variant="primary" type="submit">
              {t("contactsSubmit")}
            </Button>
          </ButtonWrapper>
        </Form>
      ) : (
        <SendStatusResult status={sendStatus} t={t} />
      )}
    </ContactsWrapper>
  );
};

export default Contacts;

