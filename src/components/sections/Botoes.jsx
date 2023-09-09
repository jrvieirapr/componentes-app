import React from "react";
import GenericButton from "../commons/buttons/GenericButton";
import './Sections.css'
const Botoes = () => {
  const handleButtonClick = () => {
    alert("Botão Generico Clicado");
  };
  return (
    <div className="div-generic">
      <h3>Botoes Genericos</h3>
      <p>
        Para usar deve passar o css bootstrap, o nome do botao e o que vai
        acontecer quando clicar
      </p>
      <div>
        <GenericButton
          css="btn btn-success"
          texto="Sucesso"
          onClick={handleButtonClick}
        />
        <GenericButton
          css="btn btn-danger"
          texto="Danger"
          onClick={handleButtonClick}
        />
        <GenericButton
          css="btn btn-warning"
          texto="Atenção"
          onClick={handleButtonClick}
        />
        <GenericButton
          css="btn btn-primary"
          texto="Primario"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default Botoes;
