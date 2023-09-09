import React from "react";
import "./InputGroup.css";

const InputGroupSelect = ({
  id,
  label,
  options,
  isInvalid,
  value,
  onChange,
}) => {
  const inputClassName = `form-select${isInvalid ? " is-invalid" : ""}`;
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        className={inputClassName}
        id={id}
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputGroupSelect;
