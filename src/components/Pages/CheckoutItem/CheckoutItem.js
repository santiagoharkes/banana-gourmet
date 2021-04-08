import React from "react";

import {
  ItemContainerStyled,
  ItemUnitsStyled,
  TextStyled,
  PriceCardText,
} from "./CheckoutItemElements";
import {
  PriceCardStyled,
  PriceCardIconStyled,
} from "components/Pages/CartItem/CartItemElements";
import { useTheme } from "Context/Theme/ThemeContext";

function CheckoutItem({ data }) {
  const { theme } = useTheme();

  return (
    <ItemContainerStyled>
      <TextStyled>{data.nombre}</TextStyled>
      <ItemUnitsStyled>
        {data.quantity} {data.quantity > 1 ? "unidades" : "unidad"}
      </ItemUnitsStyled>
      <PriceCardStyled mb="0">
        <PriceCardIconStyled dark={theme} />
        <PriceCardText dark={theme}>
          {(data.quantity * data.precio).toFixed(2)}
        </PriceCardText>
      </PriceCardStyled>
    </ItemContainerStyled>
  );
}

export default CheckoutItem;
