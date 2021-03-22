import React from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

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

  console.log({ cartItems });

  return (
    <PageContainer>
      <HeaderTitle>Cart!</HeaderTitle>
      <HeaderSubtitle>
        Aquí están los productos que seleccionaste
      </HeaderSubtitle>
      <CartContainer>
        {cartItems.length === 0 && (
          <AnimatePresence>
            <NoItemsCart h="100" key="noItemsCard" />
          </AnimatePresence>
        )}

        <AnimatePresence>
          {cartItems.map((item, index) => {
            return <CartItem data={item} key={`cartItem-${index}`} />;
          })}
        </AnimatePresence>
      </CartContainer>
      {total > 0 && (
        <CartTotalContainerStyled>
          <HeaderTitle>Total: ${total}</HeaderTitle>
          <BuyButtonStyled>Comprar!</BuyButtonStyled>
        </CartTotalContainerStyled>
      )}
    </PageContainer>
  );
}

export default Cart;
