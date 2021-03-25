import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import {
  AddMoreContainerStyled,
  DescriptionTitleStyled,
  AddProductsContainerStyled,
  ItemCardStyled,
  ImgContainerStyled,
  ImgStyled,
  ItemTitleStyled,
  PriceAddContainerStyled,
  ItemPriceContainerStyled,
  ItemPriceIconStyled,
  ItemPriceTextStyled,
  AddProductContainerStyled,
  AddProductIconStyled,
  RemoveProductIconStyled,
  CategoryTitleStyled,
} from "./ProductAddMoreElements";
import Loading from "components/Loading/Loading";
import { isInCart } from "utils/functions";

import { useAxios } from "hooks/useAxios";
import { useTheme } from "Context/Theme/ThemeContext";
import { useCart } from "Context/Cart/CartContext";

function ProductAddMore({ producto }) {
  const axios = useAxios();
  const { theme } = useTheme();
  const {
    sumarProducto,
    restarProducto,
    agregarProducto,
    cartItems,
    eliminarProducto,
  } = useCart();
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    return axios.get("/categorias");
  };

  const {
    data: { data: categorias },
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery("categories", fetchCategories);

  console.log(categories);

  useEffect(() => {
    if (
      producto.categoria.nombre === "Pizzas" ||
      producto.categoria.nombre === "Burgers" ||
      producto.categoria.nombre === "Chambuchitos"
    ) {
      const comidasFiltradas = categorias.filter(
        (categoria) =>
          categoria.nombre === "Gaseosas" ||
          categoria.nombre === "Cervezas" ||
          categoria.nombre === "Postres"
      );
      setCategories(comidasFiltradas);
    } else {
      const comidasFiltradas = categorias.filter(
        (categoria) =>
          categoria.nombre === "Pizzas" ||
          categoria.nombre === "Burgers" ||
          categoria.nombre === "Chambuchitos"
      );
      setCategories(comidasFiltradas);
    }
  }, [categorias, producto]);

  return (
    <AddMoreContainerStyled>
      <DescriptionTitleStyled>Agregar más:</DescriptionTitleStyled>
      {categoriesError && <p>Hubo un error!</p>}
      {categoriesLoading ? (
        <Loading />
      ) : (
        categories.map((categoria) => (
          <AddProductsContainerStyled>
            <CategoryTitleStyled>{categoria.nombre}</CategoryTitleStyled>
            {categoria.productos.map((producto) => (
              <ItemCardStyled>
                <ImgContainerStyled>
                  <ImgStyled src={producto?.img[0].url} />
                </ImgContainerStyled>
                <ItemTitleStyled>{producto.nombre}</ItemTitleStyled>
                <PriceAddContainerStyled>
                  <ItemPriceContainerStyled>
                    <ItemPriceIconStyled dark={theme} />
                    <ItemPriceTextStyled dark={theme}>
                      {producto.precio.toFixed(2)}
                    </ItemPriceTextStyled>
                  </ItemPriceContainerStyled>

                  {isInCart(producto, cartItems) &&
                    isInCart(producto, cartItems).quantity > 0 && (
                      <AddProductContainerStyled dark={theme}>
                        <AddProductIconStyled
                          onClick={() => sumarProducto(producto)}
                        />
                        {isInCart(producto, cartItems).quantity}
                        <RemoveProductIconStyled
                          onClick={
                            isInCart(producto, cartItems).quantity <= 1
                              ? () => eliminarProducto(producto)
                              : () => restarProducto(producto)
                          }
                        />
                      </AddProductContainerStyled>
                    )}

                  {(!isInCart(producto, cartItems) ||
                    isInCart(producto, cartItems).quantity < 1) && (
                    <AddProductContainerStyled
                      dark={theme}
                      onClick={() => agregarProducto(producto)}
                    >
                      <p>Agregar</p>
                    </AddProductContainerStyled>
                  )}
                </PriceAddContainerStyled>
              </ItemCardStyled>
            ))}
          </AddProductsContainerStyled>
        ))
      )}
    </AddMoreContainerStyled>
  );
}

export default ProductAddMore;
