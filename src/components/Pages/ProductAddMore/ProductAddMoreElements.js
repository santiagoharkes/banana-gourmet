import styled from "styled-components";
import { DescriptionTitle, ProductPriceStyled } from "pages/ProductElements";

import {
  PriceCardIconStyled,
  PriceCardTextStyled,
  AddProductStyled,
  AddIconStyled,
  RemoveIconStyled,
} from "components/Pages/ProductCard/ProductCardElements";

export const AddMoreContainerStyled = styled.div`
  margin-top: 20px;
`;

export const DescriptionTitleStyled = styled(DescriptionTitle)``;

export const AddProductsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const ItemCardStyled = styled.div`
  width: 100%;
  padding: 10px;
  background: ${(props) => props.theme.backgroundColorSecondary};
  border-radius: 30px;
  display: grid;
  grid-template-columns: auto 1fr 30%;
  align-items: center;
  gap: 10px;
`;

export const ImgContainerStyled = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: white;
`;

export const ImgStyled = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ItemTitleStyled = styled.p`
  color: ${(props) => props.theme.textColor};
`;

export const PriceAddContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ItemPriceContainerStyled = styled(ProductPriceStyled)``;

export const ItemPriceIconStyled = styled(PriceCardIconStyled)`
  padding: 0;
  font-size: 1rem !important;
`;

export const ItemPriceTextStyled = styled(PriceCardTextStyled)`
  font-size: 1rem;
`;

export const AddProductContainerStyled = styled(AddProductStyled)``;

export const AddProductIconStyled = styled(AddIconStyled)``;

export const RemoveProductIconStyled = styled(RemoveIconStyled)``;

export const CategoryTitleStyled = styled.p`
  color: ${(props) => props.theme.subtitleColor};
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 10px;
`;
