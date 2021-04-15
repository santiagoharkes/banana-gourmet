import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 10px 0;
  padding: 20px 0;
`;

export const FormStyled = styled.form`
  width: 100%;
  color: ${(props) => props.theme.textColor};
  display: flex;
  min-height: 350px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextLabel = styled.label`
  width: 100%;
`;

export const TextAreaStlyed = styled.textarea`
  width: 100%;
  margin: 20px 0;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 10px 10px;
  user-select: text;
  min-height: 20vh;

  &:focus {
    box-shadow: 0px 0px 15px #fff;
  }
`;

export const EnviarButton = styled.button`
  width: 100%;
  border: 1px solid ${(props) => props.theme.backgroundColorSecondary};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.successBackground};
  color: #212121;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  border-radius: 20px;
  border: 1px solid
    ${(props) =>
      props.dark === "dark"
        ? props.editing
          ? `${props.theme.successBackground}4a`
          : `#dddddd21`
        : props.editing
        ? `${props.theme.successBackground}4a`
        : props.theme.backgroundColorSecondary};
  padding: 20px 5px;
  font-size: 0.75rem;
  box-shadow: 0px 0px 20px #9191911f;

  & span {
    font-weight: bold;
  }
`;

export const SuccessMessageSent = styled(InfoContainer)`
  background: ${(props) => props.theme.successBackground};
  color: #212121;
  font-size: 1rem;
`;

export const ErrorMessage = styled(SuccessMessageSent)`
  background: ${(props) => props.theme.errorBackground};
  color: #eaeaea;
`;

export const VolverAHome = styled(InfoContainer)`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
`;
