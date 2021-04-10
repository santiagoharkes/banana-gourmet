import React from "react";

import {
  ItemContainerStyled,
  ItemUnitsStyled,
  TextStyled,
  PriceCardText,
  PriceCard,
  AdicionalesContainer,
  AdicionalesTitle,
  AdicionalPrecio,
  AdicionalProducto,
  ProductTitleStyled,
  TitlePrecioContainer,
} from "./CheckoutItemElements";
import { PriceCardIconStyled } from "components/Pages/CartItem/CartItemElements";
import { useTheme } from "Context/Theme/ThemeContext";
import { useCart } from "Context/Cart/CartContext";

function CheckoutItem({ data }) {
  const { theme } = useTheme();
  const { extras } = useCart();

  const isProductInExtras = extras.filter(
    (valor) => valor.idProducto === data._id
  );

  return (
    <ItemContainerStyled adicionales={!!isProductInExtras.length > 0}>
      <TextStyled>{data.nombre}</TextStyled>
      <ItemUnitsStyled>
        {data.quantity} {data.quantity > 1 ? "unidades" : "unidad"}
      </ItemUnitsStyled>
      <PriceCard mb="0">
        <PriceCardIconStyled dark={theme} />
        <PriceCardText dark={theme}>
          {(data.quantity * data.precio).toFixed(2)}
        </PriceCardText>
      </PriceCard>
      {isProductInExtras.length > 0 && (
        <AdicionalesContainer>
          <AdicionalesTitle>Adicionales</AdicionalesTitle>
          {isProductInExtras?.map((extra) => (
            <AdicionalProducto>
              <ProductTitleStyled>
                {data.nombre} {extra.index + 1}
              </ProductTitleStyled>
              {extra.idAdicionales.map((idAdicional) => {
                const findAdicional = data.adicionales.find(
                  (adicional) => adicional._id === idAdicional
                );

                return (
                  <TitlePrecioContainer>
                    <p>{findAdicional.adicional}</p>
                    <AdicionalPrecio>+ ${findAdicional.precio}</AdicionalPrecio>
                  </TitlePrecioContainer>
                );
              })}
            </AdicionalProducto>
          ))}
        </AdicionalesContainer>
      )}
    </ItemContainerStyled>
  );
}

export default CheckoutItem;
