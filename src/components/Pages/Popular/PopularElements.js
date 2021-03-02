import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

export const PopularCardStyled = styled.div`
  margin: 0 5px;
  border: 1px solid #424242;
  padding: 20px;
  border-radius: 25px;
  color: ${(props) => props.theme.textColor};
  /* background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: 50px center;
  background-repeat: no-repeat; */
  height: 150px;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  transition: all 0.3s ease, box-shadow 1s ease;
  cursor: pointer;

  & * {
    z-index: 3;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.8631653344931722) 50%,
      rgba(27, 27, 34, 0) 100%
    );
    z-index: 2;
  }

  p {
    font-size: 0.75rem;
    font-weight: 300;
    margin-bottom: 5px;
    color: ${(props) =>
      props.dark !== "dark"
        ? props.theme.backgroundColor
        : props.theme.textColor};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${(props) => props.theme.yellow};
    margin-bottom: 15px;
  }

  &:hover img {
    transform: scale(1.5);
  }
`;

export const PopularImageStyled = styled.img`
  position: absolute;
  top: 0;
  left: 50px;
  width: 100%;
  height: 100%;
  z-index: 1;
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
  font-size: 2rem !important;
  margin-right: 15px;
`;

export const PriceCardTextStyled = styled.h3`
  color: ${(props) =>
    props.dark !== "dark"
      ? props.theme.backgroundColor
      : props.theme.textColor};
  font-size: 2rem;
`;
