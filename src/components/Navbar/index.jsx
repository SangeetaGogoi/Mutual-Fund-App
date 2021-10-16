import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar
      className="bg-light justify-content-between"
      style={{ padding: "1rem" }}
    >
      <Link to="/">MF Data</Link>
      <Link to="/profile">Profile</Link>
    </Navbar>
  );
}
