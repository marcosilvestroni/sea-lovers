import { ContentWrapper } from "styles/commons";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  AvailabilityWrapper,
  ButtonWrapper,
  FieldsWrapper,
  FormWrapper,
} from "./style";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Text from "../Text";
import emailjs from "@emailjs/browser";
import moment from "moment";
import { ReactComponent as Spinner } from "/assets/img/6.svg";
import SendStatusResult from "../SendStatusResult";

const Availability = ({ t }) => {
  const [request, setRequest] = useState({
    dateRange: [
      {
        startDate: null,
        endDate: new Date(""),
        key: "selection",
      },
    ],
  });
  const form = useRef();
  const [loading, isLoading] = useState(false);
  const [sendStatus, setSendSatus] = useState("");

  const handleChangeDates = ({ startDate, endDate }) => {
    let start;
    const ranges = request.startDate;

    if (
      startDate &&
      moment(startDate).toISOString(true) ===
        moment(endDate).toISOString(true) &&
      ranges?.[0]?.startDate
    ) {
      if (
        moment(ranges?.[0]?.startDate).toISOString(true) !==
        moment(ranges?.[0]?.endDate).toISOString(true)
      ) {
        start = startDate;
      } else {
        start = ranges?.[0]?.startDate;
      }
    } else if (!startDate && endDate) {
      start = endDate;
    }

    setRequest({
      ...request,
      dateRange: [
        {
          startDate: start || startDate,
          endDate,
          key: "selection",
        },
      ],
    });
  };

  const sendAvailabilityRequest = (e) => {
    e.preventDefault();

    isLoading(true);

    const dates = { ...request.dateRange[0] };

    dates.endDate = dates.endDate.toLocaleDateString("it-IT");
    dates.startDate = dates.startDate.toLocaleDateString("it-IT");
    const data = new FormData(form.current);
    const payload = {
      user_name: data.get("user_name"),
      user_email: data.get("user_email"),
      user_message: data.get("user_message"),
      ...dates,
    };

    emailjs
      .send("service_l16ych6", "template_zii3g7p", payload, "t2hoJ3fXacWUzi3IY")
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
    <ContentWrapper>
      {loading ? (
        <Spinner />
      ) : sendStatus === "" ? (
        <AvailabilityWrapper>
          <Text tag="h2" variant="header">
            {t("availabilityTitle")}
          </Text>
          <Form className="formFields" ref={form}>
            <FormWrapper>
              <DateRangePicker
                ranges={request?.dateRange}
                showDateDisplay={false}
                showPreview={false}
                staticRanges={[]}
                moveRangeOnFirstSelection={false}
                onChange={({ selection }) => {
                  handleChangeDates(selection);
                }}
              />
              <FieldsWrapper>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>{t("contactsName")}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={t("contactsNamePlaceholder")}
                    name="user_name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>{t("contactsEmail")}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={t("contactsEmailPlaceholder")}
                    name="user_email"
                  />
                  <Form.Text className="text-muted">
                    {t("contactsEmailDisclaimer")}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmailTextarea">
                  <Form.Label>{t("availabilityNote")}</Form.Label>
                  <Form.Control as="textarea" rows={6} name="user_message" />
                </Form.Group>
              </FieldsWrapper>
            </FormWrapper>
            <ButtonWrapper>
              <Button
                variant="primary"
                type="submit"
                onClick={sendAvailabilityRequest}
              >
                {t("availabilitySend")}
              </Button>
            </ButtonWrapper>
          </Form>
        </AvailabilityWrapper>
      ) : (
        <SendStatusResult status={sendStatus} />
      )}
    </ContentWrapper>
  );
};

export default Availability;

