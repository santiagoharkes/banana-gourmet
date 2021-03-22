import styled from "styled-components";
import { motion } from "framer-motion";

export const PageContainerStyled = styled(motion.div)`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.backgroundColor};
  padding: 50px 20px 20px;
  height: 100%;
  width: 100%;
  overflow: scroll;
  transition: all 0.5s ease;
  min-height: 80%;

  &.overflow-hidden {
    overflow: hidden;
  }
`;
