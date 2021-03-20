import React from "react";

import Image404 from "../../img/404cart.webp";

import {
  NoItemContainer,
  NoItemImageStyled,
  NoItemTitle,
  NoItemSubtitle,
  NoItemButtonStyled,
} from "./NoItemsCartElements";

function NoItemsCart({ h }) {
  return (
    <NoItemContainer h={h}>
      <NoItemImageStyled src={Image404} />
      <NoItemTitle>Todavía no hay nada en la carta!</NoItemTitle>
      <NoItemSubtitle>Volvé para hacer tu pedido</NoItemSubtitle>
      <NoItemButtonStyled to="/">Volver</NoItemButtonStyled>
    </NoItemContainer>
  );
}

export default NoItemsCart;
