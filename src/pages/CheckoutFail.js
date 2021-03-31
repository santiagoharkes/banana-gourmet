import React from "react";
import { Helmet } from "react-helmet";

import PageContainer from "components/PageContainer/PageContainer";

import {
  CheckoutDoneContainer,
  CheckoutFailHero,
  CheckoutFailIcon,
  CheckoutTitleContainer,
  TitleTextStyled,
  CodigoPedidoStyled,
  VerMiPedidoButton,
  VerTodosLosPedidos,
} from "./CheckoutDoneElements";
// import { usePedido } from "Context/Pedido/PedidoContext";

function CheckoutDone() {
  // const { pedido, pedidoCorrecto } = usePedido();

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Banana Gourmet - Checkout</title>
        <meta
          name="description"
          content="Banana Gourmet - Checkout - Estás a un paso de comer rico!"
        />
      </Helmet>
      <CheckoutDoneContainer>
        <CheckoutFailHero>
          <CheckoutFailIcon />
        </CheckoutFailHero>
        <CheckoutTitleContainer>
          <TitleTextStyled>Hubo un error en tu pedido!</TitleTextStyled>
          <CodigoPedidoStyled>
            Por favor, intentá nuevamente :(
          </CodigoPedidoStyled>
          <VerMiPedidoButton>Volver a intentar</VerMiPedidoButton>
          <VerTodosLosPedidos>Ver mis pedidos anteriores</VerTodosLosPedidos>
        </CheckoutTitleContainer>
      </CheckoutDoneContainer>
    </PageContainer>
  );
}

export default CheckoutDone;
