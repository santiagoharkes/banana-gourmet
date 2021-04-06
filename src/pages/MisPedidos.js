import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { useHistory } from "react-router";

// Components
import PageContainer from "components/PageContainer/PageContainer";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import Loading from "components/Loading/Loading";

// Hooks & Context
import { useAxios } from "hooks/useAxios";
import { useAuth } from "Context/Auth/AuthContext";
import { useTheme } from "Context/Theme/ThemeContext";
import { usePedido } from "Context/Pedido/PedidoContext";

// Styled Components
import {
  PedidosContainer,
  PedidoCardContainer,
  FirstRowStyled,
  SecondRowStyled,
  CodeStyled,
  EstadoEnvio,
  DatosContainer,
  EfectivoIcon,
  TarjetaIcon,
  TakeAwayIcon,
  DeliveryIcon,
  ProductsContainer,
  ButtonsContainer,
  ButtonStyled,
  ProductStyled,
  PriceAndStateContainer,
  TotalTextStyled,
  PriceCard,
} from "./MisPedidosElements";

import {
  PriceCardIconStyled,
  PriceCardTextStyled,
} from "components/Pages/CartItem/CartItemElements";
import { AnimatePresence } from "framer-motion";
import NoItemsCart from "components/NoItemsCart/NoItemsCart";

function Pedidos() {
  const axios = useAxios();
  const history = useHistory();
  const { user } = useAuth();
  const { theme } = useTheme();
  const { setEstadoPedido, setPedido } = usePedido();
  const [pendientes, setPendientes] = useState(true);

  const fetchLikes = () => {
    return axios.get(`/pedidos?usuario=${user.user._id}`);
  };

  const {
    data: pedidos,
    isLoading: pedidosLoading,
    // isError: pedidosError,
  } = useQuery("pedidos", fetchLikes);

  const handlePedidoClick = (valor) => {
    setEstadoPedido(true);
    setPedido(valor);
    history.push("/pedido");
  };

  console.log({ pedidos });

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Banana Gourmet - Pedidos</title>
        <meta
          name="description"
          content="Banana Gourmet - Pedidos - Aquí están los pedidos que realizaste"
        />
      </Helmet>
      <HeaderTitle>Pedidos!</HeaderTitle>
      <HeaderSubtitle>Aquí están todos tus pedidos</HeaderSubtitle>
      {pedidosLoading ? (
        <Loading h={80} />
      ) : pedidos?.data?.length === 0 ? (
        <AnimatePresence>
          <NoItemsCart h="80" key="noItemsCard" from="pedidos" />
        </AnimatePresence>
      ) : (
        <PedidosContainer>
          <ButtonsContainer>
            <ButtonStyled
              active={!pendientes}
              onClick={() => setPendientes(!pendientes)}
              dark={theme}
            >
              Confirmados
            </ButtonStyled>
            <ButtonStyled
              active={pendientes}
              onClick={() => setPendientes(!pendientes)}
              dark={theme}
            >
              Pendientes
            </ButtonStyled>
          </ButtonsContainer>

          {pendientes
            ? pedidos?.data
                ?.filter(
                  (valor) =>
                    valor.estadoEnvio === "preparacion" ||
                    valor.estadoEnvio === "yendo" ||
                    valor.estadoEnvio === "listo"
                )
                .map((pedido, index) => (
                  <PedidoCardContainer
                    key={pedido._id}
                    onClick={() => handlePedidoClick(pedido)}
                  >
                    <FirstRowStyled>
                      <ProductsContainer>
                        {pedido.productos
                          ?.reduce((acc, current) => {
                            const x = acc.find(
                              (item) => item._id === current._id
                            );

                            if (!x) {
                              return acc.concat([current]);
                            } else {
                              return acc;
                            }
                          }, [])
                          .map((producto, index) => {
                            const filtradosLength = pedido.productos?.filter(
                              (holis) => holis._id === producto._id
                            );

                            return (
                              <ProductStyled>
                                <span>{filtradosLength.length} - </span>
                                {producto.nombre}
                              </ProductStyled>
                            );
                          })}
                      </ProductsContainer>
                    </FirstRowStyled>
                    <SecondRowStyled>
                      <PriceAndStateContainer>
                        <TotalTextStyled>Total:</TotalTextStyled>
                        <PriceCard>
                          <PriceCardIconStyled dark={theme} />
                          <PriceCardTextStyled dark={theme}>
                            {pedido.total.toFixed(2)}
                          </PriceCardTextStyled>
                        </PriceCard>
                      </PriceAndStateContainer>
                      <EstadoEnvio
                        envio={
                          pedido.estadoEnvio === "yendo" ||
                          pedido.estadoEnvio === "listo"
                            ? 2
                            : pedido.estadoEnvio === "preparacion"
                            ? 1
                            : 3
                        }
                      >
                        {pedido.estadoEnvio === "yendo" &&
                          "Tu pedido está yen2!"}
                        {pedido.estadoEnvio === "preparacion" &&
                          "En preparación"}
                        {pedido.estadoEnvio === "enviado" && "Enviado!"}
                        {pedido.estadoEnvio === "listo" &&
                          "Tu pedido está listo para retirar!"}
                        {pedido.estadoEnvio === "entregado" &&
                          "Tu pedido fue entregado!"}
                      </EstadoEnvio>
                      <DatosContainer>
                        <CodeStyled>Code: {pedido.code}</CodeStyled>
                        <CodeStyled>
                          Pago: {pedido.efectivo && <EfectivoIcon />}
                          {pedido.tarjeta && <TarjetaIcon />}
                        </CodeStyled>
                        <CodeStyled>
                          Envío: {pedido.delivery && <DeliveryIcon />}
                          {pedido.takeAway && <TakeAwayIcon />}
                        </CodeStyled>
                      </DatosContainer>
                    </SecondRowStyled>
                  </PedidoCardContainer>
                ))
            : pedidos?.data
                ?.filter(
                  (pedido) =>
                    pedido.estadoEnvio === "entregado" ||
                    pedido.estadoEnvio === "enviado"
                )
                .map((pedido, index) => (
                  <PedidoCardContainer
                    key={pedido._id}
                    onClick={() => handlePedidoClick(pedido)}
                  >
                    <FirstRowStyled>
                      <ProductsContainer>
                        {pedido.productos
                          ?.reduce((acc, current) => {
                            const x = acc.find(
                              (item) => item._id === current._id
                            );

                            if (!x) {
                              return acc.concat([current]);
                            } else {
                              return acc;
                            }
                          }, [])
                          .map((producto, index) => {
                            const filtradosLength = pedido.productos?.filter(
                              (holis) => holis._id === producto._id
                            );

                            return (
                              <ProductStyled>
                                <span>{filtradosLength.length} - </span>
                                {producto.nombre}
                              </ProductStyled>
                            );
                          })}
                      </ProductsContainer>
                    </FirstRowStyled>
                    <SecondRowStyled>
                      <PriceAndStateContainer>
                        <TotalTextStyled>Total:</TotalTextStyled>
                        <PriceCard>
                          <PriceCardIconStyled dark={theme} />
                          <PriceCardTextStyled dark={theme}>
                            {pedido.total.toFixed(2)}
                          </PriceCardTextStyled>
                        </PriceCard>
                      </PriceAndStateContainer>
                      <EstadoEnvio
                        envio={
                          pedido.estadoEnvio === "yendo" ||
                          pedido.estadoEnvio === "listo"
                            ? 2
                            : pedido.estadoEnvio === "preparacion"
                            ? 1
                            : 3
                        }
                      >
                        {pedido.estadoEnvio === "yendo" && "Yen2"}
                        {pedido.estadoEnvio === "preparacion" &&
                          "En preparacion"}
                        {pedido.estadoEnvio === "enviado" && "Enviado!"}
                        {pedido.estadoEnvio === "listo" &&
                          "Tu pedido está listo para retirar!"}
                        {pedido.estadoEnvio === "entregado" &&
                          "Tu pedido fue entregado!"}
                      </EstadoEnvio>
                      <DatosContainer>
                        <CodeStyled>Code: {pedido.code}</CodeStyled>
                        <CodeStyled>
                          Pago: {pedido.efectivo && <EfectivoIcon />}
                          {pedido.tarjeta && <TarjetaIcon />}
                        </CodeStyled>
                        <CodeStyled>
                          Envío: {pedido.delivery && <DeliveryIcon />}
                          {pedido.takeAway && <TakeAwayIcon />}
                        </CodeStyled>
                      </DatosContainer>
                    </SecondRowStyled>
                  </PedidoCardContainer>
                ))}
        </PedidosContainer>
      )}
    </PageContainer>
  );
}

export default Pedidos;
