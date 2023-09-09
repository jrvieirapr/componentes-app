import React from "react";
import './GenericButton.css'

const GenericButtonIcon = ({ texto, onClick, css, iconClass }) => {
    return (
      <button type="submit" className={css} onClick={onClick}>
        {iconClass && <i className={iconClass}></i>} {/* Ícone (se fornecido) */}
        {texto}
      </button>
    );
  }
  
  export default GenericButtonIcon;