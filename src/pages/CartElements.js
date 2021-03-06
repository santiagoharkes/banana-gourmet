import styled from "styled-components";
import { motion } from "framer-motion";

export const CartContainer = styled(motion.div)`
  margin: 20px 0;
  padding-bottom: 130px;
`;

export const CartTotalContainerStyled = styled.div`
  margin-bottom: 70px;
  position: absolute;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 8px #0000002b;

  @media screen and (max-width: 500px) and (max-height: 850px) {
    position: fixed;
  }
`;

export const BuyButtonStyled = styled.div`
  border-radius: 30px;
  padding: 10px 30px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) =>
    props.dark === "dark"
      ? props.theme.backgroundColor
      : props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
`;
