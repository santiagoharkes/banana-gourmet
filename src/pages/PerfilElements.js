import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

export const PerfilContainer = styled.div`
  padding-bottom: 75px;
`;

export const PerfilCard = styled.div`
  border: 1px solid
    ${(props) =>
      props.dark === "dark"
        ? props.editing
          ? `${props.theme.successBackground}4a`
          : `#dddddd21`
        : props.editing
        ? `${props.theme.successBackground}4a`
        : props.theme.backgroundColorSecondary};
  border-radius: 20px;
  padding: 40px 20px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 250px;
  box-shadow: 0px 0px 20px #9191911f;
`;

export const PerfilImage = styled.img`
  width: 100px !important;
  height: 100px !important;
  object-fit: cover;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  border: none;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const PerfilIcon = styled(PersonIcon)`
  width: 100px !important;
  height: 100px !important;
  object-fit: cover;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  color: ${(props) => props.theme.textColor};
  border: none;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  padding: 10px;
`;

export const UsernameStyled = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: 1.5rem;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const EmailStyled = styled.p`
  color: ${(props) => props.theme.subtitleColor};
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 15px;
`;

export const DireccionStyled = styled(EmailStyled)`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 5px;
  & span {
    font-weight: bold;
    margin: 0 10px;
  }
`;

export const EditIconStyled = styled(EditIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${(props) =>
    props.dark === "dark" ? `${props.theme.yellow}` : props.theme.textColor};
  cursor: pointer;
`;

export const UsernameInput = styled.input`
  border: none;
  background: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
  width: 85%;
  padding: 5px 10px;
  outline: none;
  box-shadow: 0px 0px 5px ${(props) => props.theme.successBackground};
  border: none;

  &:focus {
    box-shadow: 0px 0px 5px ${(props) => props.theme.successBackground};
    border: none;
  }
`;

export const DireccionEditTitle = styled.p`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
`;

export const DireccionInput = styled(UsernameInput)`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const ButtonAceptar = styled.div`
  border-radius: 20px;
  background: ${(props) => props.theme.successBackground};
  color: black;
  padding: 10px;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

export const ButtonCancelar = styled(ButtonAceptar)`
  border: 1px solid ${(props) => props.theme.errorBackground};
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.errorBackground};
`;

export const Button = styled(Link)`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #00000014;
  border-radius: 20px;
  background: ${(props) => props.theme.backgroundColorSecondary};
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => props.theme.textColor};
  border: 1px solid
    ${(props) =>
      props.dark === "dark"
        ? props.editing
          ? `${props.theme.successBackground}4a`
          : `#dddddd21`
        : props.editing
        ? `${props.theme.successBackground}4a`
        : props.theme.backgroundColorSecondary};
`;

export const ButtonLogout = styled(Button)`
  background: transparent;
  border: none;
`;
