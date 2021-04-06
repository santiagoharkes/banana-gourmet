import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";

// Components
import PageContainer from "components/PageContainer/PageContainer";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";

// Hooks & Context
import { useAxios } from "hooks/useAxios";
import { useAuth } from "Context/Auth/AuthContext";

// Styled Components
import { PedidosContainer } from "./MisPedidosElements";

function Pedidos() {
  const axios = useAxios();
  const { user } = useAuth();

  const fetchLikes = () => {
    return axios.get(`/pedidos?usuario=${user.user._id}`);
  };

  const {
    data: pedidos,
    // isLoading: pedidosLoading,
    // isError: pedidosError,
  } = useQuery("pedidos", fetchLikes);

  console.log({ pedidos });

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Banana Gourmet - Pedidos</title>
        <meta
          name="description"
          content="Banana Gourmet - Pedidos - Aquí están los pedidos que realizaste"
        />
      </Helmet>
      <HeaderTitle>Pedidos!</HeaderTitle>
      <HeaderSubtitle>Aquí están todos tus pedidos</HeaderSubtitle>
      <PedidosContainer>
        {pedidos?.data?.map((valor, index) => (
          <div>
            <p>
              ID de pedido {index + 1}: <span>{valor._id}</span>
            </p>
          </div>
        ))}

        {pedidos?.data?.length < 1 && <p> No hay pedidos!!! </p>}
      </PedidosContainer>
    </PageContainer>
  );
}

export default Pedidos;
