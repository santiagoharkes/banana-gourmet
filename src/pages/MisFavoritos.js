import React from "react";
import { useQuery } from "react-query";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

import { useAxios } from "../hooks/useAxios";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import Loading from "components/Loading/Loading";
import NoItemsCart from "components/NoItemsCart/NoItemsCart";
import FavoriteItem from "components/Pages/FavoriteItem/FavoriteItem";

import { FavoritesContainerStyled } from "./MisFavoritosElements";

function MisFavoritos() {
  const axios = useAxios();

  const fetchLikes = () => {
    return axios.get("/likes");
  };

  const {
    data: likes,
    isLoading: likesLoading,
    isError: likesError,
  } = useQuery("likes", fetchLikes);

  return (
    <>
      <PageContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Banana Gourmet - Favoritos</title>
          <meta
            name="description"
            content="Banana Gourmet - Favoritos - Aquí están tus productos favoritos"
          />
        </Helmet>
        <HeaderTitle>Favoritos!</HeaderTitle>
        <HeaderSubtitle>Aquí están tus productos favoritos</HeaderSubtitle>
        {likesError && <h1>Hubo un error...</h1>}
        {likesLoading && <Loading h="80" />}
        {likes?.data?.length === 0 && (
          <AnimatePresence>
            <NoItemsCart h="80" key="noItemsCard" from="favorites" />
          </AnimatePresence>
        )}
        {likes?.data?.length > 0 && (
          <FavoritesContainerStyled>
            {likes.data.map((item) => {
              return <FavoriteItem data={item.producto} key={item._id} />;
            })}
          </FavoritesContainerStyled>
        )}
      </PageContainer>
    </>
  );
}

export default MisFavoritos;
