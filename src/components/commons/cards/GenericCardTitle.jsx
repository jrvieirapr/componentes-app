import React from "react";

const GenericCardTitle = ({ title, subtitle }) => {
  return (
    <div>
      <h5 className="card-title">{title}</h5>
      {subtitle && (
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
      )}
    </div>
  );
};

export default GenericCardTitle;
