import React from "react";
import "./Error.scss";
import PropTypes from "prop-types";

const Error = ({ error }) => {
 return (
  <div className="error-box">
   <h2 className="error-header">Sorry</h2>
   <p className="error-text">{error}</p>
  </div>
 );
};

export default Error;

Error.propTypes = {
 error: PropTypes.string,
};
