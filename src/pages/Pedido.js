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
  DetailItemStyled,
  DetailTitle,
  OtrosDatos,
  TicketItemUnidades,
  TicketItemTitulo,
  TicketItemPrecio,
  TicketItemAdicionales,
  AdicionalesContainer,
  AdicionalesContainerTitulo,
  AdicionalesContainerNombre,
  AdicionalesContainerPrecio,
  AdicionalesTitle,
  AdicionalContainerItem,
} from "./PedidoElements";
import { useTheme } from "Context/Theme/ThemeContext";
import { usePedido } from "Context/Pedido/PedidoContext";
import { useAxios } from "hooks/useAxios";
import { useQuery } from "react-query";
import { useHistory } from "react-router";
import Loading from "components/Loading/Loading";

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
    isLoading: pedidoLoading,
    // isError: pedidoError,
  } = useQuery(["pedido", contextPedido?._id], () =>
    fetchPedido(contextPedido?._id)
  );

  const fetchAdicionales = () => {
    return axios.get(`/adicionales`);
  };

  const {
    data: adicionales,
    isLoading: adicionalesLoading,
    // isError: pedidoError,
  } = useQuery("adicionales", fetchAdicionales);

  useEffect(() => {
    if (!contextPedido) {
      history.push("/");
    }
  }, [history, contextPedido]);

  const getDate = () => {
    const fechita = new Date(contextPedido.createdAt);

    return `${fechita.getDate()}/${fechita.getMonth()}/${fechita.getFullYear()}`;
  };

  const getHour = () => {
    const fechita = new Date(contextPedido.createdAt);

    return `${fechita.getHours()}:${fechita.getMinutes()}hs`;
  };

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
        {pedidoLoading && adicionalesLoading ? (
          <Loading h="80" />
        ) : (
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
                      : pedido.data.estadoEnvio === "yendo" ||
                        pedido.data.estadoEnvio === "listo"
                      ? 2
                      : 3
                  }
                >
                  {pedido.data.estadoEnvio === "preparacion"
                    ? "Tu pedido está siendo preparado"
                    : pedido.data.estadoEnvio === "yendo"
                    ? "Tu pedido está yen2!"
                    : pedido.data.estadoEnvio === "listo"
                    ? "Tu pedido está listo para retirar"
                    : "Tu pedido fue entregado, que lo disfrutes!"}
                </EstadoEnvioStyled>
                <TicketContainerStyled dark={theme}>
                  <CodigoTitle dark={theme}>
                    <span>Codigo:</span>
                    <p>{pedido.data.code}</p>
                  </CodigoTitle>
                  <TicketTitle>
                    <TicketItemUnidades>Uni</TicketItemUnidades>
                    <TicketItemTitulo>Descripción</TicketItemTitulo>
                    <TicketItemPrecio>Precio</TicketItemPrecio>
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
                    .map((productito) => {
                      const filtradosLength = pedido.data.productos.filter(
                        (holis) => holis._id === productito._id
                      );

                      const adicionalesFiltrados = contextPedido.adicionales.filter(
                        (holis) => holis.idProducto === productito._id
                      );

                      return (
                        <TicketItemStyled
                          key={productito._id}
                          adicionales={!!adicionalesFiltrados.length > 0}
                        >
                          <TicketItemUnidades>
                            {filtradosLength.length}
                          </TicketItemUnidades>
                          <TicketItemTitulo>
                            {productito.nombre}
                          </TicketItemTitulo>
                          <TicketItemPrecio className="precio">
                            ${" "}
                            {(
                              productito.precio * filtradosLength.length
                            ).toFixed(2)}
                          </TicketItemPrecio>
                          {adicionalesFiltrados.length > 0 && (
                            <TicketItemAdicionales>
                              <AdicionalesTitle>Adicionales:</AdicionalesTitle>
                              {adicionalesFiltrados.map((valor) => (
                                <AdicionalesContainer>
                                  <AdicionalesContainerTitulo>
                                    {productito.nombre} - {valor.index + 1}
                                  </AdicionalesContainerTitulo>
                                  {valor.idAdicionales.map((adicional) => {
                                    const adicionalFiltrado = adicionales?.data?.find(
                                      (valor) => valor._id === adicional
                                    );

                                    return (
                                      <AdicionalContainerItem>
                                        <AdicionalesContainerNombre>
                                          {adicionalFiltrado?.adicional}
                                        </AdicionalesContainerNombre>
                                        <AdicionalesContainerPrecio>
                                          $ {adicionalFiltrado?.precio}
                                        </AdicionalesContainerPrecio>
                                      </AdicionalContainerItem>
                                    );
                                  })}
                                </AdicionalesContainer>
                              ))}
                            </TicketItemAdicionales>
                          )}
                        </TicketItemStyled>
                      );
                    })}
                  <SubtotalTitle dark={theme} borderTop>
                    <p>Subtotal</p>
                    <p>
                      $ {(pedido.data.precio + pedido.data.extras).toFixed(2)}
                    </p>
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

            <OtrosDatos>Otros datos:</OtrosDatos>
            <DetailItemStyled>
              <DetailTitle>Fecha:</DetailTitle>
              {getDate()}
            </DetailItemStyled>
            <DetailItemStyled>
              <DetailTitle>Hora:</DetailTitle>
              {getHour()}
            </DetailItemStyled>
            <DetailItemStyled>
              <DetailTitle>Método de envío:</DetailTitle>
              {contextPedido.delivery ? "Delivery" : "Take Away"}
            </DetailItemStyled>
            <DetailItemStyled>
              <DetailTitle>Método de pago:</DetailTitle>
              {contextPedido.tarjeta ? "Tarjeta" : "Efectivo"}
            </DetailItemStyled>
            {contextPedido.detalles && (
              <DetailItemStyled>
                <DetailTitle>Detalles:</DetailTitle>
                {contextPedido.detalles}
              </DetailItemStyled>
            )}
          </PedidoContainerStyled>
        )}
      </PageContainer>
    </>
  );
}

export default Pedido;
