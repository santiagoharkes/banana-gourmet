import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NoItemContainer = styled(motion.div)`
  height: ${(props) => (props.h ? `${props.h}%` : "50%")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NoItemImageStyled = styled.img`
  max-height: 150px;
  margin: 10px 0 25px;
`;

export const NoItemTitle = styled.h3`
  color: ${(props) => props.theme.textColor};
  margin: 5px 0 10px;
  text-align: center;
`;

export const NoItemSubtitle = styled.p`
  color: ${(props) => props.theme.subtitleColor};
  font-size: 1rem;
  font-weight: 300;
  margin: 5px 0 10px;
  text-align: center;
`;

export const NoItemButtonStyled = styled(Link)`
  width: 70%;
  border-radius: 30px;
  height: 35px;
  background-color: ${(props) => props.theme.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: none;
  margin: 5px 0 10px;
  outline: none;
`;
