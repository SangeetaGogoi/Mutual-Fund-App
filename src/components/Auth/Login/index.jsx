import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../services/authService";
import { setUser } from "../../../redux/actions/userActions";
import CenteredContainer from "../AuthContainer/index.jsx";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const signIn = login(userDetails);
    setLoading(true);
    signIn.then((response) => {
      if (response.data.error) {
        return setError(response.data.error);
      }
      localStorage.setItem("user", response.data.user);
      dispatch(setUser(response.data));
      history.push("/");
    });
    setLoading(false);
  };
  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4"> Login</h2>
          {error && <Alert variant="danger"> {error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup"> Sign Up </Link>
      </div>
    </CenteredContainer>
  );
}
