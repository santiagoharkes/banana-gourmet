import React, { useState } from "react";

import { useTheme } from "Context/Theme/ThemeContext";
import { InputContainerSyled, InputStyled, LabelStyled } from "./InputElements";

function Input({ type, label, onChange, value, name }) {
  const { theme } = useTheme();
  const [isActive, setIsActive] = useState(false);

  function handleTextChange(e) {
    if (e.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    onChange(e);
  }

  return (
    <InputContainerSyled>
      <InputStyled
        type={type}
        dark={theme}
        value={value}
        onChange={(e) => handleTextChange(e)}
        name={name}
      />
      <LabelStyled className={isActive ? "active" : ""} htmlFor={type}>
        {label}
      </LabelStyled>
    </InputContainerSyled>
  );
}

export default Input;
