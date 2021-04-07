import React, { useState } from "react";
import { Helmet } from "react-helmet";
import shortid from "shortid";

import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import CheckoutItem from "components/Pages/CheckoutItem/CheckoutItem";
import { useCart } from "../Context/Cart/CartContext";

import {
  CheckoutItemsContainerStyled,
  TotalContainerStyled,
  TotalPriceContainer,
  TotalPriceIcon,
  TotalPriceNumber,
  TotalTitleStyled,
  FormaDePagoContainerStyled,
  FormaDePagoCardStyled,
  EfectivoIconStyled,
  FormaDePagoCardTitleStyled,
  TarjetaIconStyled,
  DeliveryIconStyled,
  TakeAwayIconStyled,
  PrecioEnvioStyled,
  PropinaCardContainer,
  ButtonBuy,
  ErrorMessage,
  OtraPropina,
  OtraPropinaLabel,
} from "./CheckoutElements";

import { CategoryTitleStyled } from "components/Pages/ProductAddMore/ProductAddMoreElements";
import { useTheme } from "Context/Theme/ThemeContext";
import { useCheckout } from "Context/Checkout/CheckoutContext";
import { useAxios } from "hooks/useAxios";
import { useHistory } from "react-router";
import Loading from "components/Loading/Loading";
import { usePedido } from "Context/Pedido/PedidoContext";

function Cart() {
  const axios = useAxios();
  const history = useHistory();
  const { cartItems, total: subtotal, limpiarCarta } = useCart();
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [otraPropina, setOtraPropina] = useState(false);
  const [envio, setEnvio] = useState(true);
  const [pago, setPago] = useState(true);
  const [opcionesError, setOpcionesError] = useState("");
  const {
    setTarjeta,
    setEfectivo,
    setDelivery,
    setTakeAway,
    setPropina,
    takeAway,
    delivery,
    tarjeta,
    efectivo,
    propina,
    total,
    estadoEnvio,
    productos,
    precio,
    usuario,
  } = useCheckout();
  const { setEstadoPedido, setPedido } = usePedido();

  const handleBuyClick = () => {
    if (!efectivo && !tarjeta) {
      setPago(false);
      setOpcionesError("Por favor, elije un método de pago");
      if (!delivery && !takeAway) {
        setEnvio(false);
      }
      return;
    }

    if (!delivery && !takeAway) {
      setEnvio(false);
      setOpcionesError("Por favor, elije un método de envío");
      if (!efectivo && !tarjeta) {
        setPago(false);
      }
      return;
    }

    const nuevoPedido = {
      estadoPedido: "aprobado",
      estadoEnvio: estadoEnvio,
      tarjeta: tarjeta,
      efectivo: efectivo,
      productos: productos,
      precio: precio,
      code: shortid.generate(),
      delivery: delivery,
      takeAway: takeAway,
      propina: propina,
      usuario: usuario,
      total: total,
    };

    setLoading(true);
    axios
      .post("/pedidos", nuevoPedido)
      .then((valor) => {
        history.push("/pedido/done");
        setLoading(false);
        limpiarCarta();
        setEstadoPedido(true);
        setPedido(valor.data);
      })
      .catch((e) => {
        setEstadoPedido(false);
        setPedido(undefined);
        setLoading(false);
        history.push("/pedido/fail");
      });
  };

  const handleCardClick = (callback) => {
    setPago(true);
    setEnvio(true);
    setOpcionesError("");
    callback();
  };

  return (
    <>
      <PageContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Banana Gourmet - Checkout</title>
          <meta
            name="description"
            content="Banana Gourmet - Checkout - Estás a un paso de comer rico!"
          />
        </Helmet>
        <HeaderTitle>Checkout!</HeaderTitle>
        <HeaderSubtitle>Estás a un paso de comer rico</HeaderSubtitle>
        {loading ? (
          <Loading h="80" />
        ) : (
          <CheckoutItemsContainerStyled>
            <CategoryTitleStyled>Resumen:</CategoryTitleStyled>
            {/* Mapear los resultados de cartItems */}
            {cartItems.map((item) => (
              <CheckoutItem data={item} />
            ))}
            <TotalContainerStyled dark={theme}>
              <TotalTitleStyled>Sub-Total Productos:</TotalTitleStyled>
              <TotalPriceContainer>
                <TotalPriceIcon dark={theme} />
                <TotalPriceNumber dark={theme}>{subtotal}</TotalPriceNumber>
              </TotalPriceContainer>
            </TotalContainerStyled>
            <CategoryTitleStyled>Método de pago:</CategoryTitleStyled>
            <FormaDePagoContainerStyled>
              <FormaDePagoCardStyled
                className={!pago ? "error" : efectivo ? "active" : ""}
                onClick={() => handleCardClick(setEfectivo)}
              >
                <EfectivoIconStyled className={efectivo ? "active" : ""} />
                <FormaDePagoCardTitleStyled
                  className={efectivo ? "active" : ""}
                >
                  Efectivo
                </FormaDePagoCardTitleStyled>
              </FormaDePagoCardStyled>
              <FormaDePagoCardStyled
                className={!pago ? "error" : tarjeta ? "active" : ""}
                onClick={() => handleCardClick(setTarjeta)}
              >
                <TarjetaIconStyled className={tarjeta ? "active" : ""} />
                <FormaDePagoCardTitleStyled className={tarjeta ? "active" : ""}>
                  Tarjeta
                </FormaDePagoCardTitleStyled>
              </FormaDePagoCardStyled>
            </FormaDePagoContainerStyled>
            <CategoryTitleStyled>Método de envío:</CategoryTitleStyled>
            <FormaDePagoContainerStyled>
              {tarjeta && (
                <FormaDePagoCardStyled
                  className={
                    !envio
                      ? "error"
                      : efectivo
                      ? "disabled"
                      : delivery
                      ? "active"
                      : ""
                  }
                  onClick={tarjeta ? () => handleCardClick(setDelivery) : null}
                >
                  <PrecioEnvioStyled>$50</PrecioEnvioStyled>
                  <DeliveryIconStyled
                    className={efectivo ? "disabled" : delivery ? "active" : ""}
                    dark={theme}
                  />
                  <FormaDePagoCardTitleStyled
                    className={efectivo ? "disabled" : delivery ? "active" : ""}
                    dark={theme}
                  >
                    Delivery
                  </FormaDePagoCardTitleStyled>
                </FormaDePagoCardStyled>
              )}
              <FormaDePagoCardStyled
                className={!envio ? "error" : takeAway ? "active" : ""}
                onClick={() => handleCardClick(setTakeAway)}
              >
                <TakeAwayIconStyled className={takeAway ? "active" : ""} />
                <FormaDePagoCardTitleStyled
                  className={takeAway ? "active" : ""}
                >
                  Take Away
                </FormaDePagoCardTitleStyled>
              </FormaDePagoCardStyled>
            </FormaDePagoContainerStyled>
            {tarjeta && (
              <>
                <CategoryTitleStyled>Propina:</CategoryTitleStyled>
                <FormaDePagoContainerStyled>
                  <PropinaCardContainer
                    className={
                      efectivo
                        ? "disabled"
                        : propina === 0 && !otraPropina
                        ? "active"
                        : ""
                    }
                    onClick={
                      tarjeta
                        ? () => {
                            setOtraPropina(false);
                            setPropina(0);
                          }
                        : null
                    }
                  >
                    <FormaDePagoCardTitleStyled
                      className={
                        efectivo
                          ? "disabled"
                          : propina === 0 && !otraPropina
                          ? "active"
                          : ""
                      }
                    >
                      $0
                    </FormaDePagoCardTitleStyled>
                  </PropinaCardContainer>
                  <PropinaCardContainer
                    className={
                      efectivo
                        ? "disabled"
                        : propina === 25 && !otraPropina
                        ? "active"
                        : ""
                    }
                    onClick={
                      tarjeta
                        ? () => {
                            setOtraPropina(false);
                            setPropina(25);
                          }
                        : null
                    }
                  >
                    <FormaDePagoCardTitleStyled
                      className={
                        efectivo
                          ? "disabled"
                          : propina === 25 && !otraPropina
                          ? "active"
                          : ""
                      }
                    >
                      $25
                    </FormaDePagoCardTitleStyled>
                  </PropinaCardContainer>
                  <PropinaCardContainer
                    className={
                      efectivo
                        ? "disabled"
                        : propina === 50 && !otraPropina
                        ? "active"
                        : ""
                    }
                    onClick={
                      tarjeta
                        ? () => {
                            setOtraPropina(false);
                            setPropina(50);
                          }
                        : null
                    }
                  >
                    <FormaDePagoCardTitleStyled
                      className={
                        efectivo
                          ? "disabled"
                          : propina === 50 && !otraPropina
                          ? "active"
                          : ""
                      }
                    >
                      $50
                    </FormaDePagoCardTitleStyled>
                  </PropinaCardContainer>
                  <PropinaCardContainer
                    className={
                      efectivo
                        ? "disabled"
                        : propina === 75 && !otraPropina
                        ? "active"
                        : ""
                    }
                    onClick={
                      tarjeta
                        ? () => {
                            setOtraPropina(false);
                            setPropina(75);
                          }
                        : null
                    }
                  >
                    <FormaDePagoCardTitleStyled
                      className={
                        efectivo
                          ? "disabled"
                          : propina === 75 && !otraPropina
                          ? "active"
                          : ""
                      }
                    >
                      $75
                    </FormaDePagoCardTitleStyled>
                  </PropinaCardContainer>
                  <PropinaCardContainer
                    className={
                      efectivo ? "disabled" : otraPropina ? "active" : ""
                    }
                    onClick={() => {
                      setOtraPropina(true);
                    }}
                  >
                    <FormaDePagoCardTitleStyled
                      className={
                        efectivo ? "disabled" : otraPropina ? "active" : ""
                      }
                    >
                      Otra
                    </FormaDePagoCardTitleStyled>
                  </PropinaCardContainer>
                </FormaDePagoContainerStyled>
                {otraPropina && (
                  <>
                    <OtraPropinaLabel htmlFor="otraPropina">
                      Ingrese otra propina aquí...
                    </OtraPropinaLabel>
                    <OtraPropina
                      name="otraPropina"
                      id="otraPropina"
                      className={
                        efectivo ? "disabled" : otraPropina ? "active" : ""
                      }
                      value={propina}
                      placeholder="Ingrese otra propina aquí..."
                      type="number"
                      onChange={(e) => setPropina(Number(e.target.value))}
                    ></OtraPropina>
                  </>
                )}
              </>
            )}
            <TotalContainerStyled dark={theme}>
              <TotalTitleStyled>Total:</TotalTitleStyled>
              <TotalPriceContainer>
                <TotalPriceIcon dark={theme} />
                <TotalPriceNumber dark={theme}>{total}</TotalPriceNumber>
              </TotalPriceContainer>
            </TotalContainerStyled>
            {opcionesError !== "" && (
              <ErrorMessage>{opcionesError}</ErrorMessage>
            )}
            <ButtonBuy onClick={handleBuyClick}>Comprar</ButtonBuy>
          </CheckoutItemsContainerStyled>
        )}
      </PageContainer>
    </>
  );
}

export default Cart;
