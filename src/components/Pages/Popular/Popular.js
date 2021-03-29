// import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import {
  PopularCardStyled,
  PriceCardStyled,
  PriceCardIconStyled,
  PriceCardTextStyled,
  PopularImageStyled,
  PopularLinkStyled,
} from "./PopularElements";

import { useTheme } from "Context/Theme/ThemeContext";
import { useQuery } from "react-query";
import { useProducts } from "Context/Products/ProductsContext";
import { useHistory } from "react-router";

function Popular() {
  const { theme } = useTheme();
  const { storeProducto } = useProducts();
  const history = useHistory();

  const {
    data: productos,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery("products");

  SwiperCore.use([Navigation, Pagination]);

  const handleClick = (data) => {
    storeProducto(data);
    history.replace("/product/1");
  };

  return (
    <Swiper
      spaceBetween={15}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
    >
      {productos.data
        .filter((valor) => valor.popular === true)
        .map((popular) => (
          <SwiperSlide>
            <PopularLinkStyled onClick={() => handleClick(popular)}>
              <PopularCardStyled dark={theme}>
                <PopularImageStyled src={popular.img[0].url} />
                <p>{popular.categoria.nombre}</p>
                <h2>{popular.nombre}</h2>
                <PriceCardStyled>
                  <PriceCardIconStyled dark={theme} />
                  <PriceCardTextStyled dark={theme}>
                    {popular.precio}
                  </PriceCardTextStyled>
                </PriceCardStyled>
              </PopularCardStyled>
            </PopularLinkStyled>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Popular;
