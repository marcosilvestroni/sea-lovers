import { ContentWrapper } from "styles/commons";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { AvailabilityWrapper } from "./style";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Text from "components/Text";

import moment from "moment";

const Availability = () => {
  const [request, setRequest] = useState({
    dateRange: [
      {
        startDate: null,
        endDate: new Date(""),
        key: "selection",
      },
    ],
  });

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

  return (
    <ContentWrapper>
      <AvailabilityWrapper>
        <Text tag="h2" variant="header">
          Controlla la disponibilitá
        </Text>

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
            <Form.Label>Note</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Invia richiesta per controllare la disponibilitá
          </Button>
        </Form>
      </AvailabilityWrapper>
    </ContentWrapper>
  );
};

export default Availability;

