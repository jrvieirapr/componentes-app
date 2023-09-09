import React from "react";
import './CheckRadio.css'
const GenericRadioGroup = ({ options, selectedOption, onChange }) => {
    return (
      <div className="generic">
        {options.map((option) => (
          <div className="form-check" key={option.value}>
            <input
              type="radio"
              className="form-check-input"
              id={option.value}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    );
  };
  
  export default GenericRadioGroup;