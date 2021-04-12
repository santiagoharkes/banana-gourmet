import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

export const HeaderContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
`;

export const HeaderTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const MenuIconStyled = styled(MenuIcon)`
  width: 50px !important;
  height: 50px !important;
  border-radius: 15px;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  padding: 10px;
  object-fit: contain;
  border: 1px solid
    ${(props) =>
      props.dark === "dark"
        ? `${props.theme.yellow}50`
        : `${props.theme.texColor}50`};
  cursor: pointer;
  color: ${(props) =>
    props.dark === "dark" ? props.theme.yellow : props.theme.textColor};
`;
