import { useHistory } from "react-router-dom";

import AdicionalItem from "./AdicionalItem";

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
  CloseIconStyled,
  AdicionalesContainer,
  AdicionalesButton,
} from "./CartItemElements";
import { useCart } from "Context/Cart/CartContext";

import { useTheme } from "Context/Theme/ThemeContext";
import { useProducts } from "Context/Products/ProductsContext";
import { useState } from "react";

function CartItem(data) {
  const { theme } = useTheme();
  const { sumarProducto, restarProducto, eliminarProducto } = useCart();
  const { storeProducto } = useProducts();
  const history = useHistory();

  const [showAdicionales, setShowAdicionales] = useState(false);

  const handleClick = () => {
    storeProducto(data);
    history.replace("/product");
  };

  console.log({ data });

  return (
    <CartItemStyled
      data={data?.data?.adicionales?.length > 0 ? "true" : "false"}
    >
      <CloseIconStyled onClick={() => eliminarProducto(data.data)} />
      <ImageCardContainerStyled onClick={handleClick}>
        <img src={`${data.data.img[0].url}`} alt="" />
      </ImageCardContainerStyled>
      <TextContainer onClick={handleClick}>{data.data.nombre}</TextContainer>
      <PriceAddStyledContainer>
        <PriceCardStyled>
          <PriceCardIconStyled dark={theme} />
          <PriceCardTextStyled dark={theme}>
            {(data.data.precio * data.data.quantity).toFixed(2)}
          </PriceCardTextStyled>
        </PriceCardStyled>
        <AddProductStyled dark={theme}>
          <AddIconStyled onClick={() => sumarProducto(data.data)} />
          {data.data.quantity}
          <RemoveIconStyled
            onClick={
              data.data.quantity <= 1
                ? () => eliminarProducto(data.data)
                : () => restarProducto(data.data)
            }
          />
        </AddProductStyled>
      </PriceAddStyledContainer>
      {data?.data?.adicionales?.length > 0 && (
        <AdicionalesContainer>
          <AdicionalesButton
            onClick={() => setShowAdicionales(!showAdicionales)}
          >
            Adicionales
          </AdicionalesButton>

          {showAdicionales &&
            [...Array(data.data.quantity)].map((e, i) => (
              <>
                <p style={{ marginTop: "10px" }}>Producto {i + 1}</p>
                {data.data.adicionales.map((valor) => (
                  <AdicionalItem adicional={valor} />
                ))}
              </>
            ))}

          {/* {showAdicionales &&
            data.adicionales.map((valor) => (
              <AdicionalItem adicional={valor} />
            ))} */}
        </AdicionalesContainer>
      )}
    </CartItemStyled>
  );
}

export default CartItem;
