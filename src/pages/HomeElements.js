import styled from "styled-components";

import { ProductsTitleStyled } from "components/Pages/ProductContainer/ProductContainerElements";

export const ErrorMessageStyled = styled(ProductsTitleStyled)`
  text-align: center;
`;

export const ErrorDescriptionStyled = styled.p`
  color: ${(props) => props.theme.subtitleColor};
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
`;
