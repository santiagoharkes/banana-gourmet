import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";

import PageContainer from "components/PageContainer/PageContainer";

import {
  CheckoutDoneContainer,
  CheckoutDoneHero,
  CheckoutDoneIcon,
  CheckoutTitleContainer,
  TitleTextStyled,
  CodigoPedidoStyled,
  VerMiPedidoButton,
  VerTodosLosPedidos,
} from "./CheckoutDoneElements";
import { usePedido } from "Context/Pedido/PedidoContext";

function CheckoutDone() {
  const { pedido } = usePedido();
  const history = useHistory();

  const irAPedido = (endpoint) => {
    history.push(endpoint);
  };

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Banana Gourmet - EXITO PURO</title>
        <meta
          name="description"
          content="Banana Gourmet - VAMO! - Tu pedido se realizó correctamente!"
        />
      </Helmet>
      <CheckoutDoneContainer>
        <CheckoutDoneHero>
          <CheckoutDoneIcon />
        </CheckoutDoneHero>
        <CheckoutTitleContainer>
          <TitleTextStyled>Tu pedido fue realizado con éxito!</TitleTextStyled>
          <CodigoPedidoStyled>
            El código de tu pedido es: {pedido?.code}
          </CodigoPedidoStyled>
          <VerMiPedidoButton onClick={() => irAPedido("/pedido")}>
            Ver mi pedido
          </VerMiPedidoButton>
          <VerTodosLosPedidos onClick={() => irAPedido("/mis-pedidos")}>
            Ver todos mis pedidos
          </VerTodosLosPedidos>
        </CheckoutTitleContainer>
      </CheckoutDoneContainer>
    </PageContainer>
  );
}

export default CheckoutDone;
