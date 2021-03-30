import React from "react";
import { Helmet } from "react-helmet";

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
} from "./CheckoutElements";

import { CategoryTitleStyled } from "components/Pages/ProductAddMore/ProductAddMoreElements";
import { useTheme } from "Context/Theme/ThemeContext";
import { useCheckout } from "Context/Checkout/CheckoutContext";

function Cart() {
  const { cartItems, total: subtotal } = useCart();
  const { theme } = useTheme();
  const {
    setTarjeta,
    setEfectivo,
    setPrecio,
    setCode,
    setDelivery,
    setTakeAway,
    setPropina,
    takeAway,
    delivery,
    tarjeta,
    efectivo,
    propina,
    total,
  } = useCheckout();

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
          <CategoryTitleStyled>Forma de pago:</CategoryTitleStyled>
          <FormaDePagoContainerStyled>
            <FormaDePagoCardStyled
              className={efectivo ? "active" : ""}
              onClick={setEfectivo}
            >
              <EfectivoIconStyled className={efectivo ? "active" : ""} />
              <FormaDePagoCardTitleStyled className={efectivo ? "active" : ""}>
                Efectivo
              </FormaDePagoCardTitleStyled>
            </FormaDePagoCardStyled>
            <FormaDePagoCardStyled
              className={tarjeta ? "active" : ""}
              onClick={setTarjeta}
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
                className={efectivo ? "disabled" : delivery ? "active" : ""}
                onClick={tarjeta ? setDelivery : null}
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
              className={takeAway ? "active" : ""}
              onClick={setTakeAway}
            >
              <TakeAwayIconStyled className={takeAway ? "active" : ""} />
              <FormaDePagoCardTitleStyled className={takeAway ? "active" : ""}>
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
                    efectivo ? "disabled" : propina === 0 ? "active" : ""
                  }
                  onClick={tarjeta ? () => setPropina(0) : null}
                >
                  <FormaDePagoCardTitleStyled
                    className={
                      efectivo ? "disabled" : propina === 0 ? "active" : ""
                    }
                  >
                    $0
                  </FormaDePagoCardTitleStyled>
                </PropinaCardContainer>
                <PropinaCardContainer
                  className={
                    efectivo ? "disabled" : propina === 25 ? "active" : ""
                  }
                  onClick={tarjeta ? () => setPropina(25) : null}
                >
                  <FormaDePagoCardTitleStyled
                    className={
                      efectivo ? "disabled" : propina === 25 ? "active" : ""
                    }
                  >
                    $25
                  </FormaDePagoCardTitleStyled>
                </PropinaCardContainer>
                <PropinaCardContainer
                  className={
                    efectivo ? "disabled" : propina === 50 ? "active" : ""
                  }
                  onClick={tarjeta ? () => setPropina(50) : null}
                >
                  <FormaDePagoCardTitleStyled
                    className={
                      efectivo ? "disabled" : propina === 50 ? "active" : ""
                    }
                  >
                    $50
                  </FormaDePagoCardTitleStyled>
                </PropinaCardContainer>
                <PropinaCardContainer
                  className={
                    efectivo ? "disabled" : propina === 75 ? "active" : ""
                  }
                  onClick={tarjeta ? () => setPropina(75) : null}
                >
                  <FormaDePagoCardTitleStyled
                    className={
                      efectivo ? "disabled" : propina === 75 ? "active" : ""
                    }
                  >
                    $75
                  </FormaDePagoCardTitleStyled>
                </PropinaCardContainer>
                <PropinaCardContainer
                  className={
                    efectivo ? "disabled" : propina === 100 ? "active" : ""
                  }
                  onClick={tarjeta ? () => setPropina(100) : null}
                >
                  <FormaDePagoCardTitleStyled
                    className={
                      efectivo ? "disabled" : propina === 100 ? "active" : ""
                    }
                  >
                    $100
                  </FormaDePagoCardTitleStyled>
                </PropinaCardContainer>
              </FormaDePagoContainerStyled>
            </>
          )}
          <TotalContainerStyled dark={theme}>
            <TotalTitleStyled>Sub-Total:</TotalTitleStyled>
            <TotalPriceContainer>
              <TotalPriceIcon dark={theme} />
              <TotalPriceNumber dark={theme}>{total}</TotalPriceNumber>
            </TotalPriceContainer>
          </TotalContainerStyled>
        </CheckoutItemsContainerStyled>
      </PageContainer>
    </>
  );
}

export default Cart;
