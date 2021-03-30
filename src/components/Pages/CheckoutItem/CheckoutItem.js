import React from "react";

import {
  ItemContainerStyled,
  ItemUnitsStyled,
  TextStyled,
} from "./CheckoutItemElements";
import {
  PriceCardStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
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
        <PriceCardTextStyled dark={theme}>
          {(data.quantity * data.precio).toFixed(2)}
        </PriceCardTextStyled>
      </PriceCardStyled>
    </ItemContainerStyled>
  );
}

export default CheckoutItem;
