import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

export default function GenderSettings({ setGender, handleGender }) {
  return (
    <Form.Group>
      <Form.Label>Gender</Form.Label>
      <div className="d-flex align-items-center">
        <Form.Control
          type="text"
          onChange={(event) => setGender(event.target.value)}
          required
        />
        <Button onClick={(event) => handleGender(event)}>Update</Button>
      </div>
    </Form.Group>
  );
}

GenderSettings.propTypes = {
  setGender: PropTypes.func,
  handleGender: PropTypes.func,
};
