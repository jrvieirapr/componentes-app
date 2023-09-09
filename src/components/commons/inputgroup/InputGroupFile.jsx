import React from "react";
import "./InputGroup.css";

const InputGroupFile = ({ id, label, type, isInvalid, onChange }) => {
  const inputClassName = `form-control${isInvalid ? " is-invalid" : ""}`;
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type={type}
        className={inputClassName}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroupFile;
