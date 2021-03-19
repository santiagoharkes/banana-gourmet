import styled from "styled-components";

export const ProductContainerStyled = styled.div`
  width: 100%;
`;

export const ProductImageStyled = styled.div`
  max-height: 300px;
  overflow: hidden;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    transition: 0.3s ease;
    width: 100%;
    height: 200px;
    object-position: center;
    border-radius: 30px;
  }
`;
