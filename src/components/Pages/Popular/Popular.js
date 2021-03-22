import { Link } from "react-router-dom";

import {
  PopularCardStyled,
  PriceCardStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
  PopularImageStyled,
} from "./PopularElements";

import { useTheme } from "Context/Theme/ThemeContext";

function Popular({ img }) {
  const { theme } = useTheme();

  return (
    <Link replace to="/garralapala">
      <PopularCardStyled dark={theme}>
        <PopularImageStyled src={img} />
        <p>Burgers</p>
        <h2>Burger Zarpada</h2>
        <PriceCardStyled>
          <PriceCardIconStyled dark={theme} />
          <PriceCardTextStyled dark={theme}>159,99</PriceCardTextStyled>
        </PriceCardStyled>
      </PopularCardStyled>
    </Link>
  );
}

export default Popular;
