import React from "react";
import PropTypes from "prop-types";
import { Card, Form, Button, Alert, Spinner } from "react-bootstrap";

export default function PasswordSettings({
  passwordSpinner,
  error,
  handlePassword,
  password,
  newPassword,
  passwordChangeMsg,
}) {
  return (
    <Card className="d-flex align-items-center justify-content-center">
      <Card.Body>
        <h2 className="text-center mb-4"> Change Password</h2>

        {passwordSpinner ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : null}
        {passwordChangeMsg.length ? passwordChangeMsg : null}

        {error && <Alert variant="danger"> {error}</Alert>}
        <Form onSubmit={handlePassword}>
          <Form.Group>
            <Form.Label>Old password</Form.Label>
            <Form.Control type="password" ref={password} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>New password</Form.Label>
            <Form.Control type="password" ref={newPassword} required />
          </Form.Group>
          <Button className="w-100" onClick={(event) => handlePassword(event)}>
            Update Password
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

PasswordSettings.propTypes = {
  passwordSpinner: PropTypes.bool,
  error: PropTypes.bool,
  handlePassword: PropTypes.func,
  password: PropTypes.object,
  newPassword: PropTypes.object,
  passwordChangeMsg: PropTypes.string,
};
