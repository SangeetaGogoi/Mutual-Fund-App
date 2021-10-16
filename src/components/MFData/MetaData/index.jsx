import React from "react";
import PropTypes from "prop-types";
import { Card, ListGroup } from "react-bootstrap";

export default function MetaData({ schemeData }) {
  return (
    <Card border="info" style={{ margin: "0.5rem 0" }}>
      <Card.Header>{schemeData.scheme_name}</Card.Header>
      <ListGroup variant="flush">
        {Object.entries(schemeData).map((data, index) => (
          <div key={index}>
            <ListGroup.Item>
              <b> {data[0]}</b> {data[1]}
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
    </Card>
  );
}

MetaData.propTypes = {
  schemeData: PropTypes.object,
};
