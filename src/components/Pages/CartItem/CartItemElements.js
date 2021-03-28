import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";

export const CartContainer = styled.div`
  margin: 20px 0;
`;

export const CartItemStyled = styled(motion.div)`
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  min-height: 50px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 20% 1fr 30%;
  padding: 10px 20px;
  margin-bottom: 20px;
  place-items: center;
  gap: 15px;
  position: relative;

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ImageCardContainerStyled = styled.div`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  overflow: hidden;
  cursor: pointer;

  img {
    object-fit: cover;
    transition: 0.3s ease;
    width: 100%;
    height: 100%;
    object-position: center;
  }
`;

export const PriceCardStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

export const CloseIconStyled = styled(CloseIcon)`
  border-radius: 50%;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  width: 10px;
  height: 10px;
  padding: 5px;
  position: absolute;
  top: -5px;
  right: -5px;
  cursor: pointer;
`;

export const PriceCardIconStyled = styled(AttachMoneyIcon)`
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) =>
    props.dark === "dark"
      ? props.theme.backgroundColor
      : props.theme.textColor};
  font-size: 1.5rem !important;
  margin-right: 5px;
`;

export const PriceCardTextStyled = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: 1.5rem;
`;

export const AddProductStyled = styled.div`
  width: 85%;
  border-radius: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const AddIconStyled = styled(AddIcon)`
  position: absolute;
  height: 100% !important;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.yellow};
  width: auto !important;
  padding: 5px;
  cursor: pointer;
`;

export const RemoveIconStyled = styled(RemoveIcon)`
  position: absolute;
  height: 100% !important;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.yellow};
  width: auto !important;
  padding: 5px;
  cursor: pointer;
`;

export const PriceAddStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100px;
`;

export const TextContainer = styled.div`
  width: 100%;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
`;
