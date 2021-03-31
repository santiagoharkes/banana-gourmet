import styled from "styled-components";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import CloseIcon from "@material-ui/icons/Close";

export const CheckoutDoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

export const CheckoutDoneHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.successBackground};

  animation-duration: 0.5s;
  animation-name: achicar;
  animation-delay: 0.9s;
  animation-fill-mode: forwards;

  width: 100%;
  height: 30vh;
  border-radius: 30px;
  margin-bottom: 20px;

  @keyframes achicar {
    from {
      width: 100%;
      height: 30vh;
      border-radius: 30px;
      margin-bottom: 20px;
    }
    to {
      width: 10vh;
      height: 10vh;
      border-radius: 50%;
      margin: 20px auto;
    }
  }
`;

export const CheckoutFailHero = styled(CheckoutDoneHero)`
  background: ${(props) => props.theme.errorBackground};
`;

export const CheckoutDoneIcon = styled(DoneOutlineIcon)`
  color: #212121;
  width: 50% !important;
  height: 50% !important;
`;

export const CheckoutFailIcon = styled(CloseIcon)`
  color: #212121;
  width: 50% !important;
  height: 50% !important;
`;

export const CheckoutTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CodigoPedidoStyled = styled.p`
  color: ${(props) => props.theme.textColor};
  margin: 10px 0;
`;

export const TitleTextStyled = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
`;

export const VerMiPedidoButton = styled.div`
  width: 80%;
  background: ${(props) => props.theme.yellow};
  border-radius: 30px;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
`;

export const VerTodosLosPedidos = styled(VerMiPedidoButton)`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  padding: 0;
  margin: 0;
  transition: 0.5s;
  font-size: 0.75em;
`;
