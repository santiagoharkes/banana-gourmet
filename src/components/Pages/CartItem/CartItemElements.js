import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";
import CheckIcon from "@material-ui/icons/Check";

export const CartContainer = styled.div`
  margin: 20px 0;
`;

export const CartItemStyled = styled(motion.div)`
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  min-height: 50px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 20% 1fr 30%;
  grid-template-rows: ${(props) =>
    props.data === "true" ? "1fr auto" : "1fr"};
  grid-template-areas: ${(props) =>
    props.data === "true"
      ? "'imagen titulo precio' 'adicional adicional adicional'"
      : "'imagen titulo precio'"};
  padding: 10px 20px;
  margin-bottom: 20px;
  place-items: center;
  gap: 15px;
  position: relative;
  will-change: transform;
  position: relative;

  &:hover img {
    transform: scale(1.1);
    z-index: 1;
  }
`;

export const ImageCardContainerStyled = styled.div`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  overflow: hidden;
  cursor: pointer;
  will-change: transform;
  position: relative;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  z-index: 2;
  grid-area: imagen;

  img {
    object-fit: cover;
    transition: 0.3s ease;
    width: 100%;
    height: 100%;
    object-position: center;
    z-index: 1;
  }
`;

export const PriceCardStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "10px")};
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
  grid-area: precio;
`;

export const TextContainer = styled.div`
  width: 100%;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  grid-area: titulo;
`;

export const AdicionalesContainer = styled.div`
  grid-area: adicional;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* color: ${(props) =>
    props.dark === "dark" ? props.theme.yellow : props.theme.textColor}; */
  color: ${(props) => props.theme.textColor};
`;

export const AdicionalesButton = styled.div`
  border-radius: 5px;
  /* background: ${(props) => `${props.theme.yellow}10`}; */
  padding: 5px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  border-top: 1px solid ${(props) => `${props.theme.textColor}10`};
  border-bottom: 1px solid ${(props) => `${props.theme.textColor}10`};
`;

export const AdicionalesDetails = styled.div`
  border-radius: 20px;
  background: ${(props) => props.theme.backgroundColor};
  padding: 5px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 10px 0 0 0;
  color: ${(props) => props.theme.textColor};
`;

export const ItemCheck = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid ${(props) => `${props.theme.textColor}50`};
  border-radius: 50%;
  position: relative;

  &.active {
    border: inset 1px solid red;
    background: ${(props) => props.theme.yellow};
    border: 1px solid ${(props) => `${props.theme.yellow}50`};
  }
`;

export const ItemCheckIcon = styled(CheckIcon)`
  color: #212121;
  position: absolute;
  width: 20px !important;
  height: 20px !important;
  top: -5px;
  left: -1px;
`;

export const AdicionalesItemsContainer = styled.div`
  width: 100%;

  & > p {
    font-size: 0.75em;
  }
`;
