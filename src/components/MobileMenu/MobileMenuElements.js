import styled, { css } from "styled-components";
import Battery90Icon from "@material-ui/icons/Battery90";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import SignalWifi3BarIcon from "@material-ui/icons/SignalWifi3Bar";

const Icons = css`
  font-size: 15px !important;
  margin-left: 3px;
`;

export const MobileMenuContainer = styled.div`
  height: 30px;
  width: 100%;
  padding: 5px 25px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => {
    return props.transparent
      ? "transparent"
      : props.theme === "dark"
      ? "#1b1b22"
      : "#fafafa";
  }};
  color: ${(props) => {
    return props.theme === "dark" ? "#fafafa" : "#1b1b22";
  }};
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  z-index: 100;
  box-shadow: 0px 0px 10px #00000029;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BatteryIcon = styled(Battery90Icon)`
  ${Icons}
`;

export const SignalIcon = styled(SignalCellularAltIcon)`
  ${Icons}
`;

export const SignalWifi = styled(SignalWifi3BarIcon)`
  ${Icons}
`;
