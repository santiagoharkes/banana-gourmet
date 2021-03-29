import React from "react";
import { AnimatePresence } from "framer-motion";

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
