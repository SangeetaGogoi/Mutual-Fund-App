import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

export default function DOBSettings({
  date,
  setStartDate,
  handleDate,
  handleDOB,
}) {
  return (
    <Form.Group
      style={{
        padding: ".375rem",
      }}
      className="d-flex flex-column"
    >
      <Form.Label> Date of Birth</Form.Label>
      <div className="d-flex">
        <DatePicker
          selected={date}
          onChange={(date) => setStartDate(date)}
          onSelect={handleDate}
          className="form-control"
        />
        <Button onClick={(event) => handleDOB(event)}>Update</Button>
      </div>
    </Form.Group>
  );
}

DOBSettings.propTypes = {
  date: PropTypes.string,
  setStartDate: PropTypes.func,
  handleDate: PropTypes.func,
  handleDOB: PropTypes.func,
};
