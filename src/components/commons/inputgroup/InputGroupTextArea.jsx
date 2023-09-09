import React from "react";
import "./InputGroup.css";

const InputGroupTextArea = ({ id, label, placeholder, isInvalid, value, onChange }) => {
  const inputClassName = `form-control${isInvalid ? " is-invalid" : ""}`;
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <textarea
        className={inputClassName}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroupTextArea;
