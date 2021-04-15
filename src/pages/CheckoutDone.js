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
import { ContactContainer, ContactIcon } from "./PedidoElements";
import { useContact } from "Context/Contact/ContactContext";
import { useTheme } from "@material-ui/core";

function CheckoutDone() {
  const { pedido } = usePedido();
  const { contactFromPedido } = useContact();
  const { theme } = useTheme();
  const history = useHistory();

  const irAPedido = (endpoint) => {
    history.push(endpoint);
  };

  const handleContactClick = () => {
    contactFromPedido();
    history.push("/contact");
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
          <ContactContainer
            mb="0"
            m="10px 0"
            dark={theme}
            onClick={handleContactClick}
          >
            Necesitás ayuda con tu pedido? Envianos un mensaje!
            <ContactIcon />
          </ContactContainer>
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
