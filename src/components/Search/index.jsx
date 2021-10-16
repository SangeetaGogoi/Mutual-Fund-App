import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import SearchDropdown from "./Dropdown/index.jsx";

export default function Search({
  searchTerm,
  handleChange,
  searchResults,
  visiblity,
}) {
  return (
    <>
      <Form.Control
        type="email"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Type atleast 3 words. Eg: HDF.."
      />
      {visiblity ? <SearchDropdown searchResults={searchResults} /> : null}
    </>
  );
}

Search.propTypes = {
  seachTerm: PropTypes.string,
  handleChange: PropTypes.func,
};
