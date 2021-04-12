import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

export const MessageErrorStyled = styled.div`
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  text-align: center;
  background: ${(props) => props.theme.errorBackground};
  margin: 20px 0;
  color: #eaeaea;
`;

export const CheckoutDoneHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.successBackground};
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  margin: 20px auto;
`;

export const CheckoutFailHero = styled(CheckoutDoneHero)`
  background: ${(props) => props.theme.errorBackground};
`;

export const CheckoutFailIcon = styled(CloseIcon)`
  color: #212121;
  width: 50% !important;
  height: 50% !important;
  color: #eaeaea;
`;

export const VolverALogin = styled.div`
  text-align: center;
  width: 100%;
  cursor: pointer;
`;
