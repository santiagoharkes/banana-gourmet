import styled from "styled-components";

export const ProductContainerStyled = styled.div`
  width: 100%;
`;

export const ProductImageStyled = styled.div`
  max-height: 300px;
  height: 300px;
  overflow: hidden;

  img {
    object-fit: cover;
    transition: 0.3s ease;
    width: 100%;
    height: 100%;
    object-position: center;
  }
`;
