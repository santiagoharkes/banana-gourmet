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

function Popular({ img }) {
  const { theme } = useTheme();

  const {
    data: productos,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery("products");

  console.log(productos.data.filter((valor) => valor.popular === true));

  SwiperCore.use([Navigation, Pagination]);

  return (
    <Swiper
      spaceBetween={15}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true, loop: true }}
    >
      <SwiperSlide>
        <PopularLinkStyled replace to="/garralapala">
          <PopularCardStyled dark={theme}>
            <PopularImageStyled src={img} />
            <p>Burgers</p>
            <h2>Burger Zarpada</h2>
            <PriceCardStyled>
              <PriceCardIconStyled dark={theme} />
              <PriceCardTextStyled dark={theme}>159,99</PriceCardTextStyled>
            </PriceCardStyled>
          </PopularCardStyled>
        </PopularLinkStyled>
      </SwiperSlide>
      <SwiperSlide>
        <PopularLinkStyled replace to="/garralapala">
          <PopularCardStyled dark={theme}>
            <PopularImageStyled src={img} />
            <p>Burgers</p>
            <h2>Burger Zarpada</h2>
            <PriceCardStyled>
              <PriceCardIconStyled dark={theme} />
              <PriceCardTextStyled dark={theme}>159,99</PriceCardTextStyled>
            </PriceCardStyled>
          </PopularCardStyled>
        </PopularLinkStyled>
      </SwiperSlide>
    </Swiper>
  );
}

export default Popular;
