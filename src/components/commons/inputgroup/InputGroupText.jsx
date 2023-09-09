import React from "react";
import "./InputGroup.css";

const InputGroupText = ({
  id,
  label,
  type,
  placeholder,
  isInvalid,
  value,
  onChange,
}) => {
  const inputClassName = `form-control${isInvalid ? " is-invalid" : ""}`;
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type={type}
        className={inputClassName}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroupText;
