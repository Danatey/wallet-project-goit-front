import React from "react";
import PropTypes from "prop-types";
import "./Container.scss";

const Container = ({ children }) => {
  return <div className="Container">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
