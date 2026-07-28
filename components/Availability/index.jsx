import { useState, useRef } from "react";
import Form from "react-bootstrap/Form";

import {
  AvailabilityCard,
  AvailabilityHeader,
  AvailabilityWrapper,
  ButtonWrapper,
  CalendarCard,
  FieldsWrapper,
  FormHint,
  FormWrapper,
  LoaderWrapper,
} from "./style";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import emailjs from "@emailjs/browser";
import moment from "moment";
import SendStatusResult from "../SendStatusResult";
import Image from "next/image";
import { withMediaQueries } from "../../utils/withMediaQueries";

const Availability = ({ t, mediaIsPhone, mediaIsTablet }) => {
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
  const [formError, setFormError] = useState("");

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

    if (formError) {
      setFormError("");
    }
  };

  const sendAvailabilityRequest = (e) => {
    e.preventDefault();
    const dates = { ...request.dateRange[0] };

    if (!dates?.endDate || !dates?.startDate) {
      setFormError(t("availabilityDatesRequired"));
      return;
    }

    dates.endDate = dates.endDate.toLocaleDateString("it-IT");
    dates.startDate = dates.startDate.toLocaleDateString("it-IT");
    const data = new FormData(form.current);

    if (
      !data.get("user_name") ||
      !data.get("user_email") ||
      !data.get("user_phone")
    ) {
      setFormError(t("availabilityFieldsRequired"));
      return;
    }

    setFormError("");
    isLoading(true);
    const payload = {
      user_name: data.get("user_name"),
      user_email: data.get("user_email"),
      user_phone: data.get("user_phone"),
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
    <AvailabilityWrapper>
      {loading ? (
        <LoaderWrapper>
          <Image src="/assets/img/6.svg" width={40} height={40} alt="spinner" />
        </LoaderWrapper>
      ) : sendStatus === "" ? (
        <AvailabilityCard>
          <AvailabilityHeader>
            <h1>{t("availabilityTitle")}</h1>
            <p>{t("availabilityDescription")}</p>
          </AvailabilityHeader>

          <Form
            id="availability-form"
            className="formFields"
            ref={form}
            onSubmit={sendAvailabilityRequest}
          >
            <FormWrapper>
              <CalendarCard>
                <DateRangePicker
                  ranges={request?.dateRange}
                  showDateDisplay={false}
                  showPreview={false}
                  staticRanges={[]}
                  moveRangeOnFirstSelection={false}
                  months={mediaIsPhone || mediaIsTablet ? 1 : 2}
                  direction={mediaIsPhone ? "vertical" : "horizontal"}
                  onChange={({ selection }) => {
                    handleChangeDates(selection);
                  }}
                />
              </CalendarCard>

              <FieldsWrapper>
                <Form.Group className="mb-3" controlId="formEmail">
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
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>{t("contactsPhone")}*</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder={t("contactsPhonePlaceholder")}
                    name="user_phone"
                    autoComplete="tel"
                    onChange={() => setFormError("")}
                    required
                  />
                  <FormHint>{t("contactsPhoneDisclaimer")}</FormHint>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmailTextarea">
                  <Form.Label>{t("availabilityNote")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="user_message"
                    placeholder={t("contactsMessagePlaceholder")}
                    onChange={() => setFormError("")}
                  />
                </Form.Group>
              </FieldsWrapper>
            </FormWrapper>
            {formError && <FormHint role="alert">{formError}</FormHint>}
            <ButtonWrapper>
              <button type="submit">{t("availabilitySend")}</button>
            </ButtonWrapper>
            <ButtonWrapper isSticky>
              <button type="submit" form="availability-form">
                {t("availabilitySend")}
              </button>
            </ButtonWrapper>
          </Form>
        </AvailabilityCard>
      ) : (
        <SendStatusResult status={sendStatus} t={t} />
      )}
    </AvailabilityWrapper>
  );
};

export default withMediaQueries(Availability);

