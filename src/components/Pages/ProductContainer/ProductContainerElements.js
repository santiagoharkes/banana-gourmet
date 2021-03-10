import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

import { Link } from "react-router-dom";

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

export const CategoryBadgeStyled = styled(Link)`
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
  min-width: max-content;

  &:first-child {
    margin-left: 15px;
  }

  &:last-child {
    margin-right: 20px;
  }

  img,
  svg {
    max-height: 25px;
    margin-right: 10px;
    border-radius: 50%;
    padding: 1px;
    filter: drop-shadow(0 0 0.15rem #00000070);
  }
`;

export const ProductsListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 47%);
  gap: 6%;
`;

export const AllProductsStyled = styled.div`
  padding-bottom: 100px;
`;
