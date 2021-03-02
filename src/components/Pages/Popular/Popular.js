import {
  PopularCardStyled,
  PriceCardStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
  PopularImageStyled,
} from "./PopularElements";

function Popular({ img, theme, dark }) {
  return (
    <PopularCardStyled dark={dark} theme={theme}>
      <PopularImageStyled src={img} />
      <p>Burgers</p>
      <h2>Burger Zarpada</h2>
      <PriceCardStyled>
        <PriceCardIconStyled dark={dark} theme={theme} />
        <PriceCardTextStyled dark={dark} theme={theme}>
          159,99
        </PriceCardTextStyled>
      </PriceCardStyled>
    </PopularCardStyled>
  );
}

export default Popular;
