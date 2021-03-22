import React from "react";

import Image404 from "../../img/404cart.webp";

import {
  NoItemContainer,
  NoItemImageStyled,
  NoItemTitle,
  NoItemSubtitle,
  NoItemButtonStyled,
} from "./NoItemsCartElements";

const noItemsCartVariants = {
  hidden: {
    x: "200vw",
  },
  visible: {
    x: "0vw",
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    x: "200vw",
    transition: { ease: "easeInOut" },
  },
};

function NoItemsCart({ h }) {
  return (
    <NoItemContainer
      h={h}
      variants={noItemsCartVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <NoItemImageStyled src={Image404} />
      <NoItemTitle>Todavía no hay nada en la carta!</NoItemTitle>
      <NoItemSubtitle>Volvé para hacer tu pedido</NoItemSubtitle>
      <NoItemButtonStyled to="/">Volver</NoItemButtonStyled>
    </NoItemContainer>
  );
}

export default NoItemsCart;
