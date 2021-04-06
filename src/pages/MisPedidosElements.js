import styled from "styled-components";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import { HeaderTitleStyled } from "components/Pages/HeaderTitle/HeaderTitleElements";
import { PriceCardStyled } from "components/Pages/Popular/PopularElements";

export const PedidosContainer = styled.div`
  padding: 20px 0;
  padding-bottom: 80px;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ButtonStyled = styled.div`
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  background: ${(props) =>
    props.active ? props.theme.yellow : props.theme.backgroundColorSecondary};
  cursor: pointer;
  color: ${(props) =>
    props.active && props.dark === "dark"
      ? props.theme.backgroundColor
      : props.theme.textColor};
`;

export const PedidoCardContainer = styled.div`
  border-radius: 30px;
  border: 1px solid
    ${(props) =>
      props.dark === "dark"
        ? props.envio === 1
          ? `${props.theme.pendingBackground}61`
          : props.envio === 2
          ? `${props.theme.yendoBackground}61`
          : `${props.theme.successBackground}61`
        : "transparent"};
  padding: 10px;
  margin-bottom: 20px;
  background: ${(props) => props.theme.backgroundColorSecondary};
  cursor: pointer;
`;

export const SecondRowStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const FirstRowStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px;
`;

export const PriceAndStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const DatosContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const CodeStyled = styled.p`
  color: ${(props) => props.theme.textColor};
  /* text-align: center; */
  font-size: 0.75em;
  user-select: text;
  display: flex;
  align-items: center;
  padding: 3px 0;
`;

export const EstadoEnvio = styled.div`
  padding: 10px;
  border-radius: 10px;
  background: ${(props) =>
    props.dark === "dark"
      ? "transparent"
      : props.envio === 1
      ? props.theme.pendingBackground
      : props.envio === 2
      ? props.theme.yendoBackground
      : props.theme.successBackground};
  color: ${(props) =>
    props.dark === "dark"
      ? props.envio === 1
        ? props.theme.pendingBackground
        : props.envio === 2
        ? props.theme.yendoBackground
        : props.theme.successBackground
      : props.theme.textColor};
  border: 1px solid
    ${(props) =>
      props.dark === "dark"
        ? props.envio === 1
          ? props.theme.pendingBackground
          : props.envio === 2
          ? props.theme.yendoBackground
          : props.theme.successBackground
        : "transparent"};
  text-align: center;
  justify-self: center;
  margin-bottom: 10px;
  width: 100%;
`;

export const EfectivoIcon = styled(LocalAtmIcon)`
  color: ${(props) => props.theme.textColor};
  padding: 3px;
`;

export const TarjetaIcon = styled(CreditCardIcon)`
  color: ${(props) => props.theme.textColor};
  padding: 3px;
`;

export const TakeAwayIcon = styled(DirectionsWalkIcon)`
  color: ${(props) => props.theme.textColor};
  padding: 3px;
`;

export const DeliveryIcon = styled(MotorcycleIcon)`
  color: ${(props) => props.theme.textColor};
  padding: 3px;
`;

export const ProductsContainer = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const ProductStyled = styled.p`
  font-size: 1em;
  color: ${(props) => props.theme.textColor};

  & span {
    font-size: 0.75em;
  }
`;

export const TotalTextStyled = styled(HeaderTitleStyled)`
  margin: 0 10px;
`;

export const PriceCard = styled(PriceCardStyled)`
  margin: 0;
`;
