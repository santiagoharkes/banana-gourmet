import styled from "styled-components";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

export const InputContainerSyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 5px;

  &:focus-within label {
    transform: translate(0, 5px) scale(0.75);
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 56px;
  padding: 15px 16px 0 10px;
  outline: 0;
  border: none;
  border-bottom: 1px solid
    ${(props) =>
      props.dark === "dark" ? props.theme.yellow : props.theme.textColor};
  border-radius: 4px;
  background: transparent;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
  user-select: text;
  position: relative;

  &:-moz-placeholder {
    box-shadow: none !important;
  }

  &:invalid {
    border: none;
    border-bottom: 3px solid red;
    box-shadow: none;
    color: red;
  }

  &.invalid {
    border: none;
    border-bottom: 3px solid red;
    box-shadow: none;
    color: red;
  }
`;

export const LabelStyled = styled.label`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 12px;
  color: #999;
  pointer-events: none;
  position: absolute;
  transform: translate(0, 26px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;

  &.active {
    transform: translate(0, 5px) scale(0.75);
  }
`;

export const ShowPassword = styled(VisibilityIcon)`
  position: absolute;
  top: 35%;
  right: 5%;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  opacity: 0.5;
`;

export const HidePassword = styled(VisibilityOffIcon)`
  position: absolute;
  top: 35%;
  right: 5%;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  opacity: 0.5;
`;
