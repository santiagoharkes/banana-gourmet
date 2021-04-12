import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import PageContainer from "components/PageContainer/PageContainer";
import {
  ProductContainerStyled,
  ProductImageStyled,
  DescriptionTitle,
  TitleContainerStyled,
  PriceAddContainerStyled,
  ProductPriceStyled,
  LineaDivisora,
  DescriptionTitleStyled,
} from "./ProductElements";
import {
  AddProductStyled,
  AddIconStyled,
  RemoveIconStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
} from "components/Pages/ProductCard/ProductCardElements";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import ProductAddMore from "components/Pages/ProductAddMore/ProductAddMore";
import LikeButton from "components/LikeButton/LikeButton";
import { useTheme } from "Context/Theme/ThemeContext";
import { useProducts } from "Context/Products/ProductsContext";
import { useCart } from "Context/Cart/CartContext";
import { isInCart } from "utils/functions";
import { useAuth } from "Context/Auth/AuthContext";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { useAxios } from "hooks/useAxios";
import Loading from "components/Loading/Loading";

SwiperCore.use([Navigation, Pagination]);

function Product() {
  const history = useHistory();
  const axios = useAxios();
  const { theme } = useTheme();
  const { producto } = useProducts();
  const { user } = useAuth();

  const {
    sumarProducto,
    restarProducto,
    agregarProducto,
    cartItems,
    eliminarProducto,
  } = useCart();

  useEffect(() => {
    if (!producto || producto === null) {
      history.push("/");
    }
  }, [history, producto]);

  const fetchPedido = (id) => {
    return axios.get(`/productos/${id}`);
  };

  const {
    data: product,
    isLoading: productLoading,
    // isError: pedidoError,
  } = useQuery(["producto", producto?._id], () => fetchPedido(producto?._id));

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Banana Gourmet - Product</title>
        <meta
          name="description"
          content="Banana Gourmet - Product - Mirá la descripción de este producto"
        />
      </Helmet>
      {productLoading && <Loading h="80" />}
      {product?.data && (
        <ProductContainerStyled>
          <TitleContainerStyled>
            <HeaderTitle>{product?.data?.nombre}</HeaderTitle>
            <LikeButton user={user} producto={product?.data} />
          </TitleContainerStyled>
          {product.data.img.length > 1 ? (
            <Swiper
              spaceBetween={20}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              loop={true}
            >
              {product?.data?.img?.map((valor) => (
                <SwiperSlide key={valor._id}>
                  <ProductImageStyled>
                    <img src={`${valor.url}`} alt="" />
                  </ProductImageStyled>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <ProductImageStyled>
              <img src={`${product?.data?.img[0].url}`} alt="" />
            </ProductImageStyled>
          )}
          <PriceAddContainerStyled>
            <ProductPriceStyled>
              <PriceCardIconStyled dark={theme} />
              <PriceCardTextStyled dark={theme}>
                {product.data.precio.toFixed(2)}
              </PriceCardTextStyled>
            </ProductPriceStyled>
            {isInCart(product?.data, cartItems) &&
              isInCart(product?.data, cartItems).quantity > 0 && (
                <AddProductStyled dark={theme}>
                  <AddIconStyled onClick={() => sumarProducto(product.data)} />
                  {isInCart(product?.data, cartItems).quantity}
                  <RemoveIconStyled
                    onClick={
                      isInCart(product?.data, cartItems).quantity <= 1
                        ? () => eliminarProducto(product?.data)
                        : () => restarProducto(product?.data)
                    }
                  />
                </AddProductStyled>
              )}

            {(!isInCart(product?.data, cartItems) ||
              isInCart(product?.data, cartItems).quantity < 1) && (
              <AddProductStyled
                dark={theme}
                onClick={() => agregarProducto(product?.data)}
              >
                <p>Agregar</p>
              </AddProductStyled>
            )}
          </PriceAddContainerStyled>
          <DescriptionTitle>Descripción:</DescriptionTitle>
          <DescriptionTitleStyled>
            {product?.data?.descripcion}
          </DescriptionTitleStyled>

          <LineaDivisora />

          {product.data && <ProductAddMore producto={product?.data} />}
        </ProductContainerStyled>
      )}
    </PageContainer>
  );
}

export default Product;
