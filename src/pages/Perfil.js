import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// Components
import PageContainer from "components/PageContainer/PageContainer";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import Avatar from "../img/avatar.webp";

// Hooks & Context

// Styled components
import {
  PerfilContainer,
  PerfilCard,
  PerfilImage,
  DireccionStyled,
  UsernameStyled,
  EmailStyled,
  EditIconStyled,
  UsernameInput,
  DireccionInput,
  DireccionEditTitle,
  ButtonsContainer,
  ButtonAceptar,
  ButtonCancelar,
} from "./PerfilElements";
import { useAuth } from "Context/Auth/AuthContext";
import { useTheme } from "Context/Theme/ThemeContext";
import { useHistory } from "react-router";
import { useAxios } from "hooks/useAxios";
import Loading from "components/Loading/Loading";

function Perfil() {
  const { user, setUser, loading, setLoading } = useAuth();
  const { theme } = useTheme();
  const axios = useAxios();
  const history = useHistory();
  const [editProfile, setEditProfile] = useState(false);
  const [usuarito, setUsuarito] = useState({
    nombre: "",
    direccion: "",
  });

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    } else {
      setUsuarito({
        nombre: user.user.nombre || user.user.username,
        direccion: user.user.direccion,
      });
    }
  }, [user, history]);

  const updateUser = () => {
    setLoading(true);
    axios.put(`/users/${user.user.id}`, usuarito).then((res) => {
      setUser({ user: { ...res.data } });
    });
  };

  console.log({ usuarito });

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Banana Gourmet - Perfil</title>
        <meta
          name="description"
          content="Banana Gourmet - Perfil - Dale la bienvenida a tu perfil!"
        />
      </Helmet>
      <HeaderTitle>Perfil!</HeaderTitle>
      <HeaderSubtitle>
        Este a tu perfil, donde podrás modificar tus datos personales
      </HeaderSubtitle>
      <PerfilContainer>
        {user &&
          (loading ? (
            <PerfilCard dark={theme} editing={editProfile}>
              <Loading />
            </PerfilCard>
          ) : (
            <PerfilCard dark={theme} editing={editProfile}>
              {!editProfile && (
                <EditIconStyled
                  dark={theme}
                  onClick={() => setEditProfile(!editProfile)}
                />
              )}
              <PerfilImage src={Avatar} />
              {editProfile ? (
                <UsernameInput
                  type="text"
                  value={usuarito.nombre}
                  onChange={(e) => {
                    setUsuarito({
                      ...usuarito,
                      nombre: e.target.value,
                    });
                  }}
                />
              ) : (
                <UsernameStyled>{usuarito.nombre}</UsernameStyled>
              )}
              <EmailStyled>{user?.user?.email}</EmailStyled>
              {editProfile ? (
                <>
                  <DireccionEditTitle>Dirección:</DireccionEditTitle>
                  <DireccionInput
                    type="text"
                    value={usuarito.direccion}
                    onChange={(e) => {
                      setUsuarito({
                        ...usuarito,
                        direccion: e.target.value,
                      });
                    }}
                  />
                </>
              ) : (
                <DireccionStyled>
                  <span>Dirección:</span>
                  {user?.user?.direccion || "No tenés dirección"}
                </DireccionStyled>
              )}
              {editProfile && (
                <ButtonsContainer>
                  <ButtonCancelar onClick={() => setEditProfile(false)}>
                    Cancelar
                  </ButtonCancelar>
                  <ButtonAceptar
                    onClick={() => {
                      updateUser();
                      setEditProfile(false);
                    }}
                  >
                    Guardar
                  </ButtonAceptar>
                </ButtonsContainer>
              )}
            </PerfilCard>
          ))}
      </PerfilContainer>
    </PageContainer>
  );
}

export default Perfil;
