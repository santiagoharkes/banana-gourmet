import styled from "styled-components";

export const LoadingContainerStyled = styled.div`
  height: ${(props) => (props.height ? `${props.height}%` : `50%`)};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ZapiLogoStyled = styled.img`
  max-height: 70px;

  animation: rotacion 1.2s infinite;

  @keyframes rotacion {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
