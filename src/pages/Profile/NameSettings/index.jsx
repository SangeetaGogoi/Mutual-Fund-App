import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

export default function NameSettings({ setName, handleName }) {
  return (
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <div className="d-flex align-items-center">
        <Form.Control
          type="text"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <Button onClick={(event) => handleName(event)}>Update</Button>
      </div>
    </Form.Group>
  );
}

NameSettings.propTypes = {
  setName: PropTypes.func,
  handleName: PropTypes.func,
};
