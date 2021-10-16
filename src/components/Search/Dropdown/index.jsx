import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SearchDropdown({ searchResults }) {
  return (
    <div
      style={{
        zIndex: "1000",
        position: "absolute",
        top: "100%",
        height: "300px",
        overflow: "scroll",
        width: "inherit",
        background: "#fefefe",
        padding: "1rem 0",
      }}
    >
      {searchResults.length
        ? searchResults.map((item) => (
            <div key={item.schemeName} style={{ padding: "0.5rem 0" }}>
              <Link to={`/details/${item.schemeCode}`}>{item.schemeName}</Link>
            </div>
          ))
        : "No results"}
    </div>
  );
}

SearchDropdown.propTypes = {
  searchResults: PropTypes.array,
};
