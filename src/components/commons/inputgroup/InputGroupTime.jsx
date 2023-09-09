import React from "react";
import "./InputGroup.css";

const InputGroupTime = ({ id, label, type, isInvalid, value, onChange }) => {
  const inputClassName = `form-control${isInvalid ? " is-invalid" : ""}`;
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className={inputClassName}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroupTime;
