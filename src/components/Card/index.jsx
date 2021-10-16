import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CardComponent({ scheme }) {
  return (
    <Card style={{ margin: "0.5rem 0" }} >
      <Card.Body>
        <Card.Title>{scheme.schemeName}</Card.Title>
        <Link to={`/details/${scheme.schemeCode}`}>View Details</Link>
      </Card.Body>
    </Card>
  )
}

CardComponent.propTypes = {
  scheme: PropTypes.object,
}