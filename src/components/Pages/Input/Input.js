import React, { useEffect, useState } from "react";

import { useTheme } from "Context/Theme/ThemeContext";
import {
  InputContainerSyled,
  InputStyled,
  LabelStyled,
  ShowPassword,
  HidePassword,
} from "./InputElements";

function Input({
  type,
  label,
  onChange,
  value,
  name,
  ref,
  onBlur,
  className,
  setErrores,
  icon,
  showPassword,
  setShowPassword,
}) {
  const { theme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const [nombreClase, setNombreClase] = useState("");

  useEffect(() => {
    if (value !== "") {
      setIsActive(true);
    }

    setNombreClase(className);
  }, [value, className]);

  function handleTextChange(e) {
    if (e.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    // if (nombreClase === "invalid") {
    //   setNombreClase("");
    // }

    if (setErrores) {
      setErrores({ emailError: "", usernameError: "", errores: "" });
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
        ref={ref}
        onBlur={onBlur}
        className={nombreClase}
      />
      <LabelStyled className={isActive ? "active" : ""} htmlFor={type}>
        {label}
      </LabelStyled>
      {/* {icon === true && showPassword ? <ShowPassword /> : <HidePassword />} */}
      {icon ? (
        showPassword ? (
          <HidePassword onClick={() => setShowPassword(!showPassword)} />
        ) : (
          <ShowPassword onClick={() => setShowPassword(!showPassword)} />
        )
      ) : null}
    </InputContainerSyled>
  );
}

export default Input;
