import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const BottomMenuContainerStyled = styled.div`
  height: 70px;
  background: ${(props) => props.theme.backgroundColor};
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  box-shadow: 0px 2px 8px #0000002b;
  transition: 0.5s ease;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  color: ${(props) => props.theme.textColor};

  a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchIconStyled = styled(SearchIcon)``;

export const ZapiLogoStyled = styled.img`
  max-height: 100%;
`;

export const CartIconStyled = styled(ShoppingCartIcon)``;
