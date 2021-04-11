import Loading from "components/Loading/Loading";
import Cookies from "js-cookie";
import { useAuth } from "Context/Auth/AuthContext";
import { useAxios } from "hooks/useAxios";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

function GithubLogin() {
  const location = useLocation();
  const axios = useAxios();
  const { login, loginError, setLoading, loading } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;

    setLoading(true);

    console.log({ search });

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
        console.log(error);
        loginError();
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, history]);

  return <div>{loading && <Loading h="100" />}</div>;
}

export default GithubLogin;
