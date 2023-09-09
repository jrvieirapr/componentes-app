import React from "react";
import "./InputGroup.css";

const InputGroupNumber = ({
  id,
  label,
  type,
  placeholder,
  isInvalid,
  value,
  onChange,
  min,
  max,
  step
}) => {
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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
};

export default InputGroupNumber;
