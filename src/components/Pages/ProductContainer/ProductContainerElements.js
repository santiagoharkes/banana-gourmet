import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ScrollContainer from "react-indiana-drag-scroll";

export const ProductsTitleContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductsTitleStyled = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: 1.25rem;
`;

export const ProductsSeeAllStyled = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: 0.75rem;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    color: ${(props) => (props.dark === "dark" ? props.theme.yellow : "black")};
  }
`;

export const CategoryListStyled = styled(ScrollContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  margin: 0 -15px;
`;

export const CategoryBadgeStyled = styled.div`
  padding: 5px 10px;
  background-color: ${(props) =>
    props.active ? props.theme.yellow : props.theme.backgroundColorSecondary};
  color: ${(props) =>
    props.active
      ? props.dark === "dark"
        ? props.theme.backgroundColor
        : props.theme.textColor
      : props.theme.textColor};
  margin-right: 10px;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;

  &:first-child {
    margin-left: 15px;
  }

  &:last-child {
    margin-right: 20px;
  }

  img {
    max-height: 25px;
    margin-right: 10px;
    border-radius: 50%;
    padding: 1px;
    filter: drop-shadow(0 0 0.15rem #00000070);
  }
`;

export const ProductsListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const ProductCartStyled = styled.div`
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  min-height: 50px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
`;

export const ImageCardContainerStyled = styled.div`
  border-radius: 50%;
  height: 120px;
  width: 120px;
  overflow: hidden;
  margin-bottom: 15px;

  &:hover img {
    transform: scale(1.1);
  }

  img {
    object-fit: cover;
    transition: 0.3s ease;
    width: 100%;
    height: 100%;
    object-position: center;
  }
`;

export const TextCardContainerStyled = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PriceCardStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
