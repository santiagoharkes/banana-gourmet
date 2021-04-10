import styled from "styled-components";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import {
  PriceCardStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
} from "components/Pages/CartItem/CartItemElements";

import { ItemContainerStyled } from "components/Pages/CheckoutItem/CheckoutItemElements";

export const CheckoutItemsContainerStyled = styled.div`
  padding: 20px 0;
  padding-bottom: 80px;
`;

export const TotalContainerStyled = styled(ItemContainerStyled)`
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  border: 1px solid
    ${(props) =>
      props.dark === "dark"
        ? `${props.theme.yellow}4a`
        : `${props.theme.textColor}4a`};
  display: flex;
  justify-content: space-between;
`;

export const TotalTitleStyled = styled.p`
  color: ${(props) => props.theme.textColor};
`;

export const TotalPriceContainer = styled(PriceCardStyled)`
  margin: 0;
`;

export const TotalPriceIcon = styled(PriceCardIconStyled)`
  background-color: ${(props) =>
    props.dark === "dark" ? props.theme.yellow : props.theme.textColor};
  color: ${(props) =>
    props.dark === "dark" ? props.theme.backgroundColor : props.theme.yellow};
`;

export const TotalPriceNumber = styled(PriceCardTextStyled)`
  color: ${(props) => props.theme.textColor};
`;

export const FormaDePagoContainerStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
`;

export const FormaDePagoCardStyled = styled.div`
  border-radius: 20px;
  background: ${(props) => props.theme.backgroundColorSecondary};
  border: 1px solid #8c8c8c38;
  min-height: 100px;
  min-width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  width: 90px;
  height: 125px;
  cursor: pointer;
  margin-right: 20px;
  gap: 10px;
  position: relative;

  &.disabled {
    cursor: not-allowed;
    opacity: ${(props) => (props.theme === "dark" ? 1 : 0.2)};
  }

  &.active {
    background: ${(props) => props.theme.yellow};
  }

  &.error {
    border: 1px solid ${(props) => props.theme.errorBackground};
  }
`;

export const EfectivoIconStyled = styled(LocalAtmIcon)`
  color: ${(props) => props.theme.textColor};
  width: 100% !important;
  height: 50% !important;

  &.active {
    color: #212121;
  }
`;

export const TarjetaIconStyled = styled(CreditCardIcon)`
  color: ${(props) => props.theme.textColor};
  width: 100% !important;
  height: 50% !important;

  &.active {
    color: #212121;
  }
`;

export const DeliveryIconStyled = styled(MotorcycleIcon)`
  color: ${(props) => props.theme.textColor};
  width: 100% !important;
  height: 50% !important;

  &.disabled {
    color: #393939;
  }

  &.active {
    color: #212121;
  }
`;

export const TakeAwayIconStyled = styled(DirectionsWalkIcon)`
  color: ${(props) => props.theme.textColor};
  width: 100% !important;
  height: 50% !important;

  &.active {
    color: #212121;
  }
`;

export const FormaDePagoCardTitleStyled = styled.div`
  color: ${(props) => props.theme.textColor};
  text-align: center;

  &.disabled {
    color: #393939;
  }

  &.active {
    color: #212121;
  }
`;

export const PrecioEnvioStyled = styled.div`
  position: absolute;
  width: 50%;
  height: 20px;
  padding: 5px;
  top: -10px;
  background-color: ${(props) => props.theme.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75em;
  border-radius: 10px;

  &.active {
    background-color: ${(props) => props.theme.backgroundColorSecondary};
  }
`;

export const PropinaCardContainer = styled(FormaDePagoCardStyled)`
  min-width: 0;
  min-height: 0;
  height: auto;
  width: auto;
  padding: 10px 20px;
`;

export const OtraPropinaLabel = styled.label`
  color: ${(props) => props.theme.textColor};
  margin: 10px 0;
  display: block;
`;

export const OtraPropina = styled.input`
  border-radius: 20px;
  background: ${(props) => props.theme.backgroundColorSecondary};
  border: 1px solid #8c8c8c38;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  margin-right: 20px;
  gap: 10px;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  border: none;
  outline: none;
  color: ${(props) => props.theme.textColor};
  user-select: text;
  -webkit-appearance: none;
  -moz-appearance: textfield;

  &.disabled {
    cursor: not-allowed;
    opacity: ${(props) => (props.theme === "dark" ? 1 : 0.2)};
  }

  &.active {
    border: 1px solid
      ${(props) => {
        return `${props.theme.yellow}61`;
      }};
  }
`;

export const ButtonBuy = styled(ItemContainerStyled)`
  background-color: ${(props) => props.theme.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ErrorMessage = styled(ItemContainerStyled)`
  background-color: ${(props) => props.theme.errorBackground};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetallesStyled = styled.textarea`
  border-radius: 10px;
  background: ${(props) => props.theme.backgroundColorSecondary};
  border: 1px solid #8c8c8c38;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  outline: none;
  color: ${(props) => props.theme.textColor};
  user-select: text;
  -webkit-appearance: none;
  -moz-appearance: textfield;
`;
