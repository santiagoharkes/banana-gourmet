import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";

import {
  PedidoContainerStyled,
  TicketContainerStyled,
  TicketItemStyled,
  TicketTitle,
  SubtotalTitle,
  EnvioPropinaStyled,
  CodigoTitle,
  // EstadoPedidoStyled,
  EstadoEnvioStyled,
} from "./PedidoElements";
import { useTheme } from "Context/Theme/ThemeContext";
import { usePedido } from "Context/Pedido/PedidoContext";
import { useAxios } from "hooks/useAxios";
import { useQuery } from "react-query";
import { useHistory } from "react-router";

function Pedido() {
  const { theme } = useTheme();
  const history = useHistory();
  const { pedido: contextPedido } = usePedido();
  const axios = useAxios();

  const fetchPedido = (id) => {
    return axios.get(`/pedidos/${id}`);
  };

  const {
    data: pedido,
    // isLoading: pedidoLoading,
    // isError: pedidoError,
  } = useQuery(["pedido", contextPedido?._id], () =>
    fetchPedido(contextPedido?._id)
  );

  useEffect(() => {
    if (!contextPedido) {
      history.push("/");
    }
  }, [history, contextPedido]);

  return (
    <>
      <PageContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Banana Gourmet - Pedido</title>
          <meta
            name="description"
            content="Banana Gourmet - Pedido - Este es tu pedido!"
          />
        </Helmet>
        <HeaderTitle>Pedido!</HeaderTitle>
        <HeaderSubtitle>Estos son los detalles de tu pedido</HeaderSubtitle>
        <PedidoContainerStyled>
          {/* <EstadoPedidoStyled dark={theme}>
            Tu pedido ha sido aprobado!
          </EstadoPedidoStyled> */}
          {pedido?.data && (
            <>
              <EstadoEnvioStyled
                dark={theme}
                estado={
                  pedido.data.estadoEnvio === "preparacion"
                    ? 1
                    : pedido.data.estadoEnvio === "yendo"
                    ? 2
                    : 3
                }
              >
                {pedido.data.estadoEnvio === "preparacion"
                  ? "Tu pedido está siendo preparado"
                  : pedido.data.estadoEnvio === "yendo"
                  ? "Tu pedido está yen2!"
                  : "Tu pedido fue entregado, que lo disfrutes!"}
              </EstadoEnvioStyled>
              <TicketContainerStyled dark={theme}>
                <CodigoTitle dark={theme}>
                  <span>Codigo:</span>
                  <p>{pedido.data.code}</p>
                </CodigoTitle>
                <TicketTitle>
                  <p>Uni</p>
                  <p>Descripción</p>
                  <p>Precio</p>
                </TicketTitle>
                {pedido.data.productos
                  .reduce((acc, current) => {
                    const x = acc.find((item) => item._id === current._id);
                    if (!x) {
                      return acc.concat([current]);
                    } else {
                      return acc;
                    }
                  }, [])
                  .map((valor) => {
                    const filtradosLength = pedido.data.productos.filter(
                      (holis) => holis._id === valor._id
                    );

                    return (
                      <TicketItemStyled>
                        <p>{filtradosLength.length}</p>
                        <p>{valor.nombre}</p>
                        <p className="precio">
                          $ {(valor.precio * filtradosLength.length).toFixed(2)}
                        </p>
                      </TicketItemStyled>
                    );
                  })}
                <SubtotalTitle dark={theme} borderTop>
                  <p>Subtotal</p>
                  <p>$ {pedido.data.precio}</p>
                </SubtotalTitle>
                {pedido.data.delivery && (
                  <EnvioPropinaStyled>
                    <p>Envio</p>
                    <p>$ 50</p>
                  </EnvioPropinaStyled>
                )}
                {pedido.data.propina > 0 && (
                  <EnvioPropinaStyled>
                    <p>Propina</p>
                    <p>$ {pedido.data.propina}</p>
                  </EnvioPropinaStyled>
                )}
                <SubtotalTitle dark={theme} borderTop>
                  <p>TOTAL</p>
                  <p>$ {pedido.data.total}</p>
                </SubtotalTitle>
              </TicketContainerStyled>
            </>
          )}
        </PedidoContainerStyled>
      </PageContainer>
    </>
  );
}

export default Pedido;
