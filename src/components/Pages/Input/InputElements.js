import styled from "styled-components";

export const InputContainerSyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px 0;
  width: 100%;

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

  &:-moz-placeholder {
    box-shadow: none !important;
  }

  &:invalid {
    border: none;
    border-bottom: 3px solid red;
    box-shadow: none;
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
