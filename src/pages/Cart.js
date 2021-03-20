import React from "react";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import CartItem from "components/Pages/CartItem/CartItem";
import NoItemsCart from "components/NoItemsCart/NoItemsCart";

import { useCart } from "../Context/Cart/CartContext";
import { ThemeProvider } from "styled-components";
import { useTheme } from "Context/Theme/ThemeContext";
import {
  CartContainer,
  CartTotalContainerStyled,
  BuyButtonStyled,
} from "./CartElements";

import PizzaTranqui from "../img/pizzaTranqui.webp";

function Cart() {
  const { theme, ...state } = useTheme();

  const { cartItems, total } = useCart();

  console.log({ cartItems });

  return (
    <ThemeProvider theme={state.colors}>
      <PageContainer theme={state.colors}>
        <HeaderTitle>Cart!</HeaderTitle>
        <HeaderSubtitle>
          Aquí están los productos que seleccionaste
        </HeaderSubtitle>
        <CartContainer>
          {cartItems.length === 0 && <NoItemsCart h="100" />}
          {cartItems.map((item) => {
            return <CartItem img={PizzaTranqui} data={item} />;
          })}
        </CartContainer>
        {total > 0 && (
          <CartTotalContainerStyled>
            <HeaderTitle>Total: ${total}</HeaderTitle>
            <BuyButtonStyled>Comprar!</BuyButtonStyled>
          </CartTotalContainerStyled>
        )}
      </PageContainer>
    </ThemeProvider>
  );
}

export default Cart;
