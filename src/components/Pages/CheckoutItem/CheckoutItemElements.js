import styled from "styled-components";
import { PriceCardTextStyled } from "components/Pages/CartItem/CartItemElements";

export const ItemContainerStyled = styled.div`
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  min-height: 50px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  padding: 10px 20px;
  margin-bottom: 20px;
  place-items: center;
  gap: 15px;
  position: relative;
  will-change: transform;
  position: relative;
`;

export const ItemUnitsStyled = styled.div`
  background-color: ${(props) => props.theme.yellow};
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 0.75em;
  text-align: center;
  width: 100%;
`;

export const TextStyled = styled.p`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-size: 0.75em;
`;

export const PriceCardText = styled(PriceCardTextStyled)`
  font-size: 1em;
`;
