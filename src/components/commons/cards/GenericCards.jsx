import React from "react";
import "./GenericCards.css";

const GenericCard = ({ children }) => {
  return (<div className="card">{children}</div>);
};

export default GenericCard;
