import React from "react";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import CartItem from "components/Pages/CartItem/CartItem";
import NoItemsCart from "components/NoItemsCart/NoItemsCart";
import { useCart } from "../Context/Cart/CartContext";
import {
  CartContainer,
  CartTotalContainerStyled,
  BuyButtonStyled,
} from "./CartElements";

function Cart() {
  const { cartItems, total } = useCart();

  return (
    <>
      <PageContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Banana Gourmet - Cart</title>
          <meta
            name="description"
            content="Banana Gourmet - Cart - Aquí están los productos que seleccionaste"
          />
        </Helmet>
        <HeaderTitle>Cart!</HeaderTitle>
        <HeaderSubtitle>
          Aquí están los productos que seleccionaste
        </HeaderSubtitle>
        {cartItems.length === 0 && (
          <AnimatePresence>
            <NoItemsCart h="80" key="noItemsCard" from="cart" />
          </AnimatePresence>
        )}
        {cartItems.length > 0 && (
          <CartContainer>
            <AnimatePresence>
              {cartItems.map((item) => {
                return <CartItem data={item} key={item._id} />;
              })}
            </AnimatePresence>
          </CartContainer>
        )}
      </PageContainer>
      {total > 0 && (
        <CartTotalContainerStyled>
          <HeaderTitle>Total: ${total}</HeaderTitle>
          <BuyButtonStyled>Comprar!</BuyButtonStyled>
        </CartTotalContainerStyled>
      )}
    </>
  );
}

export default Cart;
