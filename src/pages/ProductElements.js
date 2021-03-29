import styled from "styled-components";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import { HeaderTitleStyled } from "components/Pages/HeaderSubtitle/HeaderSubtitleElements";

import { PriceCardStyled } from "components/Pages/ProductCard/ProductCardElements";

export const ProductContainerStyled = styled.div`
  width: 100%;
  padding-bottom: 75px;

  &.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets {
    margin-bottom: 10px;
  }

  &.swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 25px;
  }
`;

export const ProductImageStyled = styled.div`
  max-height: 300px;
  overflow: hidden;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
    height: 200px;
    object-position: center;
    border-radius: 30px;
    z-index: 1;
  }
`;

export const DescriptionTitle = styled.p`
  ${HeaderTitleStyled}
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => props.theme.textColor};
`;

export const TitleContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceAddContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductPriceStyled = styled(PriceCardStyled)`
  margin: 0;
  justify-content: flex-start;
`;

export const LineaDivisora = styled.div`
  height: 0;
  border-bottom: 1px solid ${(props) => props.theme.yellow};
  width: 100%;
  margin: 20px 0;
  opacity: 0.5;
`;

export const DescriptionTitleStyled = styled(HeaderSubtitle)``;
