import styled from "styled-components";
import { PriceCardTextStyled } from "components/Pages/CartItem/CartItemElements";

export const ItemContainerStyled = styled.div`
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  min-height: 50px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.adicionales ? "25% 1fr 25%" : "25% 1fr 25%"};
  grid-template-rows: ${(props) => (props.adicionales ? "auto auto" : "1fr")};
  grid-template-areas: ${(props) =>
    props.adicionales
      ? "'titulo unidades precio' 'adicionales adicionales adicionales'"
      : "'titulo unidades precio'"};
  padding: 10px 20px;
  margin-bottom: 20px;
  place-items: center;
  gap: 15px;
  row-gap: 5px;
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
  grid-area: unidades;
`;

export const TextStyled = styled.p`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-size: 0.75em;
  grid-area: titulo;
`;

export const PriceCardText = styled(PriceCardTextStyled)`
  font-size: 1em;
`;

export const PriceCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "10px")};
  grid-area: precio;
`;

export const AdicionalesTitle = styled.p`
  font-size: 1em;
  border-bottom: 1px solid ${(props) => `${props.theme.textColor}30`};
  margin-bottom: 5px;
  width: 100%;
  padding: 5px 0;
  color: ${(props) => props.theme.textColor};
`;

export const AdicionalesContainer = styled.div`
  grid-area: adicionales;
  padding: 5px;
  font-size: 0.75em;
  justify-self: flex-start;
  width: 100%;
`;

export const TitlePrecioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const AdicionalPrecio = styled.span`
  margin-left: 5px;
`;

export const AdicionalProducto = styled.div`
  margin-bottom: 10px;
  color: ${(props) => props.theme.textColor};
`;

export const ProductTitleStyled = styled.div`
  width: 100%;
  /* background: ${(props) => props.theme.backgroundColor}; */
  border-radius: 5px;
  padding: 3px 0;
  margin: 5px 0;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;
