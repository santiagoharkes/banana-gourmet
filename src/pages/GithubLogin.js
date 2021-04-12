import Loading from "components/Loading/Loading";
import Cookies from "js-cookie";
import { useAuth } from "Context/Auth/AuthContext";
import { useAxios } from "hooks/useAxios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import PageContainer from "components/PageContainer/PageContainer";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";

import {
  MessageErrorStyled,
  CheckoutFailHero,
  CheckoutFailIcon,
  VolverALogin,
} from "./GithubLoginElements";

function GithubLogin() {
  const location = useLocation();
  const axios = useAxios();
  const { login, loginError, setLoading, loading } = useAuth();
  const [error, setError] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;

    setLoading(true);

    axios
      .get(`https://nucba-zapi-app.herokuapp.com/auth/github/callback${search}`)
      .then((userInfo) => {
        const inFifteenMinutes = new Date(
          new Date().getTime() + 15 * 60 * 1000
        );
        Cookies.set("token", userInfo.data.jwt, {
          expires: inFifteenMinutes,
        });

        console.log(userInfo.data);

        login(userInfo.data);
        history.push("/");
      })
      .catch((error) => {
        setError(error?.response?.data?.message[0]?.messages[0]?.id || error);
        loginError();
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, history]);

  return (
    <div>
      {loading && <Loading h="100" />}
      {error && (
        <PageContainer>
          <HeaderTitle>Login error! :(</HeaderTitle>
          <HeaderSubtitle>
            Oops! Parece que hubo un error con tu login
          </HeaderSubtitle>
          <CheckoutFailHero>
            <CheckoutFailIcon />
          </CheckoutFailHero>
          <MessageErrorStyled>
            El email que elegiste para iniciar sesión ya está registrado! Por
            favor, comprobá el método de inicio de sesión e intentá nuevamente!
          </MessageErrorStyled>
          <VolverALogin onClick={() => history.push("/login")}>
            Volver a Login!
          </VolverALogin>
        </PageContainer>
      )}
    </div>
  );
}

export default GithubLogin;
