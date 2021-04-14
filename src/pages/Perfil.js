import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router";
import "react-toastify/dist/ReactToastify.css";

// Components
import PageContainer from "components/PageContainer/PageContainer";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
// import Avatar from "../img/avatar.webp";
import Loading from "components/Loading/Loading";

// Hooks & Context
import { useAuth } from "Context/Auth/AuthContext";
import { useTheme } from "Context/Theme/ThemeContext";
import { useAxios } from "hooks/useAxios";

// Styled components
import {
  PerfilContainer,
  PerfilCard,
  // PerfilImage,
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
  Button,
  ButtonLogout,
  PerfilIcon,
} from "./PerfilElements";

function Perfil() {
  const { user, setUser, loading, setLoading, logout } = useAuth();
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
    axios
      .put(`/users/${user.user.id}`, usuarito)
      .then((res) => {
        toast.success("✅ Usuario editado correctamente!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setUser({ user: { ...res.data } });
      })
      .catch((error) => {
        toast.error("❌ Ups! No pudimos actualizar tu perfil", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
              {/* <PerfilImage src={Avatar} /> */}
              <PerfilIcon />
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
        <Button to="/mis-pedidos" dark={theme}>
          Mis pedidos
        </Button>
        <Button to="/mis-favoritos" dark={theme}>
          Mis favoritos
        </Button>
        <ButtonLogout
          onClick={() => {
            logout();
            history.push("/");
          }}
          dark={theme}
        >
          Logout
        </ButtonLogout>
      </PerfilContainer>
    </PageContainer>
  );
}

export default Perfil;
