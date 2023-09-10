import React, { useState } from "react";
import "./Sections.css";
import InputGroupText from "../commons/inputgroup/InputGroupText";
import InputGroupNumber from "../commons/inputgroup/InputGroupNumber";
import InputGroupRange from "../commons/inputgroup/InputGroupRange";
import InputGroupDate from "../commons/inputgroup/InputGroupDate";
import InputGroupTime from "../commons/inputgroup/InputGroupTime";
import InputGroupFile from "../commons/inputgroup/InputGroupFile";
import InputGroupSelect from "../commons/inputgroup/InputGroupSelect";
import InputGroupTextArea from "../commons/inputgroup/InputGroupTextArea";
const Inputs = () => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [inputC, setInputC] = useState("");
  const [rangeValue, setRangeValue] = useState(5);
  const [dateInput, setDateInput] = useState(
    new Date().toISOString().substr(0, 10)
  ); //Inicializar com a data de hoje
  const [timeInput, setTimeInput] = useState(
    new Date().toLocaleTimeString().slice(0, 5)
  ); //Inicializar com a hora atual
  const [fileInput, setFileInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [textAreaInput, setTextAreaInput] = useState("");

  const onChangeInputA = (e) => {
    setInputA(e.target.value);
  };
  const onChangeInputB = (e) => {
    setInputB(e.target.value);
  };
  const onChangeInputC = (e) => {
    setInputC(e.target.value);
  };

  const arrayComIdDescricao = [
    { value: 1, label: "Item 1" },
    { value: 2, label: "Item 2" },
    { value: 3, label: "Item 3" },
  ];

  const onChangeRange = (e) => {
    setRangeValue(e.target.value);
  };
  const onChangeDate = (e) => {
    setDateInput(e.target.value);
  };
  const onChangeTime = (e) => {
    setTimeInput(e.target.value);
  };
  const onChangeFile = (e) => {
    setFileInput(e.target.value);
  };
  const onChangeTextArea = (e) => {
    setTextAreaInput(e.target.value);
  };

  const onSelect = (e) => {
    setSelectInput(e.target.value);
  };

  return (
    <div className="div-generic">
      <form>
        <h3>Inputs Genericos</h3>
        <p>
          {" "}
          para usar deve passar id, label, type, placeholder, isInvalid, value,
          onChange
        </p>
        <div>
          <h3>Texto normal</h3>
          <InputGroupText
            id="texto"
            label="Nome do campo"
            type="text"
            placeholder="Exemplo de texto"
            onChange={onChangeInputA}
          />
          <label htmlFor="">Saida: {inputA}</label>
        </div>
        <div>
          <h3>Password</h3>
          <InputGroupText
            id="password"
            label="Password:"
            type="password"
            placeholder="Exemplo de digite seu password"
            onChange={onChangeInputB}
            autoComplete="current-password"
            value = ""
          />
          <label htmlFor="">Saida: {inputB}</label>
        </div>
        <div>
          <h3>E-mail</h3>
          <InputGroupText
            id="email"
            label="Email:"
            type="email"
            placeholder="Exemplo de digite seu e-mail"
            onChange={onChangeInputC}
          />
          <label htmlFor="">Saida: {inputC}</label>
        </div>
        <div>
          <h3>Numeros Inteiros de 0 a 10</h3>
          <InputGroupNumber
            id="number"
            label="Numero:"
            type="number"
            placeholder="Exemplo de digite seu numero"
            min={0}
            max={10}
            step={0}
          />
        </div>
        <div>
          <h3>Numeros Decimais</h3>
          <InputGroupNumber
            id="decimal"
            label="Numero:"
            type="number"
            placeholder="Exemplo de digite seu numero"
            step={0.5}
          />
        </div>
        <div>
          <h3>Range</h3>
          <InputGroupRange
            id="range"
            label="Numero:"
            type="range"
            step={0.5}
            min={0}
            max={10}
            value={rangeValue}
            onChange={onChangeRange}
          />
        </div>
        <div>
          <h3>Data</h3>
          <InputGroupDate
            id={"date"}
            label="Data:"
            type="date"
            value={dateInput}
            onChange={onChangeDate}
          />
          <label htmlFor="">Saida: {dateInput}</label>
        </div>
        <div>
          <h3>Time</h3>
          <InputGroupTime
            id={"time"}
            label="Hora:"
            type="time"
            value={timeInput}
            onChange={onChangeTime}
          />
          <label htmlFor="">Saida: {timeInput}</label>
        </div>
        <div>
          <h3>File</h3>
          <InputGroupFile
            id={"file"}
            label="Arquivo:"
            type="file"
            value={fileInput}
            onChange={onChangeFile}
          />
          <label htmlFor="">Saida: {fileInput}</label>
        </div>
        <div>
          <h3>Select</h3>
          <InputGroupSelect
            id="select"
            label="Caixa de seleção"
            options={arrayComIdDescricao}
            value={selectInput}
            onChange={onSelect}
          />
          <label htmlFor="">Saida: {selectInput}</label>
        </div>
        <div>
          <h3>Area de texto</h3>
          <InputGroupTextArea
            id="textArea"
            label="Area de texto:"
            type="textArea"
            placeholder="Exemplo de digite seu e-texto"
            onChange={onChangeTextArea}
            value={textAreaInput}
          />
          <label htmlFor="">Saida: {textAreaInput}</label>
        </div>
      </form>
    </div>
  );
};

export default Inputs;
