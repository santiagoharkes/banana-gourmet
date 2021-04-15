import { useHistory } from "react-router-dom";

import {
  CartItemStyled,
  PriceCardStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
  ImageCardContainerStyled,
  AddProductStyled,
  AddIconStyled,
  RemoveIconStyled,
  PriceAddStyledContainer,
  TextContainer,
} from "../CartItem/CartItemElements";
import { useCart } from "Context/Cart/CartContext";

import { useTheme } from "Context/Theme/ThemeContext";
import { useProducts } from "Context/Products/ProductsContext";
import { isInCart } from "utils/functions";

function CartItem({ data }) {
  const { theme } = useTheme();
  const {
    sumarProducto,
    restarProducto,
    eliminarProducto,
    agregarProducto,
    cartItems,
  } = useCart();
  const { storeProducto } = useProducts();
  const history = useHistory();
  // const [producto, setProducto] = useState({});

  // useEffect(() => {
  //   const filterProduct = cartItems.find((valor) => valor._id === data._id);
  //   setProducto(filterProduct);
  // }, [data, cartItems]);

  const handleClick = () => {
    storeProducto(data);
    history.push("/product");
  };

  return (
    <CartItemStyled>
      <ImageCardContainerStyled onClick={handleClick}>
        <img src={`${data.img[0].url}`} alt="" />
      </ImageCardContainerStyled>
      <TextContainer onClick={handleClick}>{data.nombre}</TextContainer>
      <PriceAddStyledContainer>
        <PriceCardStyled>
          <PriceCardIconStyled dark={theme} />
          <PriceCardTextStyled dark={theme}>{data.precio}</PriceCardTextStyled>
        </PriceCardStyled>

        {isInCart(data, cartItems) && isInCart(data, cartItems).quantity > 0 && (
          <AddProductStyled dark={theme}>
            <AddIconStyled onClick={() => sumarProducto(data)} />
            {isInCart(data, cartItems).quantity}
            <RemoveIconStyled
              onClick={
                isInCart(data, cartItems).quantity <= 1
                  ? () => eliminarProducto(data)
                  : () => restarProducto(data)
              }
            />
          </AddProductStyled>
        )}

        {(!isInCart(data, cartItems) ||
          isInCart(data, cartItems).quantity < 1) && (
          <AddProductStyled dark={theme} onClick={() => agregarProducto(data)}>
            <p>Agregar</p>
          </AddProductStyled>
        )}
      </PriceAddStyledContainer>
    </CartItemStyled>
  );
}

export default CartItem;
