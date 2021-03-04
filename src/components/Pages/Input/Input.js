import React, { useState } from "react";

import { useTheme } from "Context/ThemeContext";
import { InputContainerSyled, InputStyled, LabelStyled } from "./InputElements";

function Input({ type, label }) {
  const { theme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  function handleTextChange(text) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <InputContainerSyled>
      <InputStyled
        type={type}
        dark={theme}
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <LabelStyled className={isActive ? "active" : ""} htmlFor={type}>
        {label}
      </LabelStyled>
    </InputContainerSyled>
  );
}

export default Input;
