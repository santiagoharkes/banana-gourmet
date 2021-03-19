import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import CartItem from "components/Pages/CartItem/CartItem";

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

  const data = [
    {
      title: "Pizza tranca palanca",
      price: 125,
      description: "Es una pizza tranquila",
    },
    {
      title: "Pizza la terrible del oeste",
      price: 195,
      description: "Es una pizza terrible",
    },
    {
      title: "Pizza tranca palanca",
      price: 125,
      description: "Es una pizza tranquila",
    },
    {
      title: "Pizza la terrible del oeste",
      price: 195,
      description: "Es una pizza terrible",
    },
    {
      title: "Pizza tranca palanca",
      price: 125,
      description: "Es una pizza tranquila",
    },
    {
      title: "Pizza la terrible del oeste",
      price: 195,
      description: "Es una pizza terrible",
    },
    {
      title: "Pizza tranca palanca",
      price: 125,
      description: "Es una pizza tranquila",
    },
    {
      title: "Pizza la terrible del oeste",
      price: 195,
      description: "Es una pizza terrible",
    },
  ];

  return (
    <ThemeProvider theme={state.colors}>
      <PageContainer theme={state.colors}>
        <HeaderTitle>Cart!</HeaderTitle>
        <HeaderSubtitle>
          Aquí están los productos que seleccionaste
        </HeaderSubtitle>
        <CartContainer>
          {data.map((item) => (
            <CartItem img={PizzaTranqui} data={item} />
          ))}
        </CartContainer>
        <CartTotalContainerStyled>
          <HeaderTitle>Total: $125</HeaderTitle>
          <BuyButtonStyled>Comprar!</BuyButtonStyled>
        </CartTotalContainerStyled>
      </PageContainer>
    </ThemeProvider>
  );
}

export default Cart;
