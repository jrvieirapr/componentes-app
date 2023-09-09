import React, { useState } from "react";
import "./InputGroup.css";

const InputGroupRange = ({
  id,
  label,
  type,
  placeholder,
  isInvalid,
  value,
  onChange,
  min,
  max,
  step,
  orient = "horizontal",
  details = [],
}) => {
  const [rangeLabel, setRangeLabel] = useState(value);
  const inputClassName = `col form-control${isInvalid ? " is-invalid" : ""}`;
  // Cria o elemento <datalist> dinâmico com base nos detalhes (details)
  const datalistOptions = details.map((detail, index) => (
    <option key={index} value={detail} />
  ));
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className="row">
        <input
          type={type}
          className={inputClassName}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          list="values"
          value={value}
          orient={orient}
        />
        <label htmlFor={id} className="col-1">{value} </label>
      </div>
    </div>
  );
};

export default InputGroupRange;
