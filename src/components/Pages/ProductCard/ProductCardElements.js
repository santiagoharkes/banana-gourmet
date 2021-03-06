import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export const ProductCardStyled = styled.div`
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  min-height: 50px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  height: 100%;
  will-change: transform;
  position: relative;

  &:hover img {
    transform: scale(1.1);
    filter: contrast(100%);
    z-index: 1;
  }
`;

export const ImageCardContainerStyled = styled.div`
  border-radius: 50%;
  height: 120px;
  width: 120px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 15px;
  will-change: transform;
  position: relative;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  z-index: 2;

  img {
    object-fit: cover;
    transition: 0.3s ease;
    width: 100%;
    height: 100%;
    object-position: center;
    filter: contrast(75%);
    z-index: 1;
  }
`;

export const TextCardContainerStyled = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const PriceCardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
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
  width: 100%;
  border-radius: 30px;
  height: 35px;
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
