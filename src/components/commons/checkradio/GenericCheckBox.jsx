import React from "react";
import "./CheckRadio.css";

// Componente reutilizável para uma caixa de seleção
const GenericCheckbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="generic form-check">
      <input
        id={id}
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default GenericCheckbox;
