import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import {
  ButtonWrapper,
  ContactsCard,
  ContactsHeader,
  ContactsWrapper,
  FormHint,
  LoaderWrapper,
} from "./styles";
import emailjs from "@emailjs/browser";
import SendStatusResult from "../SendStatusResult";
import Image from "next/image";

const Contacts = ({ t }) => {
  const form = useRef();
  const [loading, isLoading] = useState(false);
  const [sendStatus, setSendSatus] = useState("");
  const [formError, setFormError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    if (!data.get("user_name") || !data.get("user_email")) {
      setFormError(t("contactsFieldsRequired"));
      return;
    }

    setFormError("");
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
      <ContactsCard>
        <ContactsHeader>
          <h1>{t("contactsTitle")}</h1>
          <p>{t("homeBannerSubTitle")}</p>
        </ContactsHeader>

        {loading ? (
          <LoaderWrapper>
            <Image src="/assets/img/6.svg" width={40} height={40} alt="spinner" />
          </LoaderWrapper>
        ) : sendStatus === "" ? (
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>{t("contactsName")}*</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("contactsNamePlaceholder")}
                name="user_name"
                autoComplete="name"
                onChange={() => setFormError("")}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>{t("contactsEmail")}*</Form.Label>
              <Form.Control
                type="email"
                placeholder={t("contactsEmailPlaceholder")}
                name="user_email"
                autoComplete="email"
                onChange={() => setFormError("")}
                required
              />
              <FormHint>{t("contactsEmailDisclaimer")}</FormHint>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmailTextarea">
              <Form.Label>{t("contactsMessage")}</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="user_message"
                placeholder={t("contactsMessagePlaceholder")}
                onChange={() => setFormError("")}
                required
              />
            </Form.Group>
            {formError && <FormHint role="alert">{formError}</FormHint>}
            <ButtonWrapper>
              <button type="submit">{t("contactsSubmit")}</button>
            </ButtonWrapper>
          </Form>
        ) : (
          <SendStatusResult status={sendStatus} t={t} />
        )}
      </ContactsCard>
    </ContactsWrapper>
  );
};

export default Contacts;

