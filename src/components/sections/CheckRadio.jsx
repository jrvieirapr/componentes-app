import React, { useState } from "react";
import "./Sections.css";
import GenericCheckbox from "../commons/checkradio/GenericCheckBox";
import GenericRadioGroup from "../commons/checkradio/GenericRadioGroup";

const CheckRadioSection = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [selectedOption, setSelectedOption] = useState("1");

  const options = [
    { value: "1", label: "Opção 1" },
    { value: "2", label: "Opção 2" },
    { value: "3", label: "Opção 3" },
  ];
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="div-generic">
      <h2>Checkbox</h2>
      <div>
        <GenericCheckbox
          id="opcaoA"
          label="Opção A"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <label htmlFor="">Saida: {isChecked.toString()}</label>
      </div>
      <h2>Radio Button</h2>
      <div>
      <GenericRadioGroup
        options={options}
        selectedOption={selectedOption}
        onChange={handleRadioChange}
      />
        <label htmlFor="">Saida: {selectedOption}</label>
      </div>
    </div>
  );
};

export default CheckRadioSection;
