import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import PageContainer from "components/PageContainer/PageContainer";

import { usePedido } from "Context/Pedido/PedidoContext";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";
import HeaderTitle from "components/Pages/HeaderTitle/HeaderTitle";
import { useContact } from "Context/Contact/ContactContext";
import { useAuth } from "Context/Auth/AuthContext";

import {
  FormContainer,
  FormStyled,
  TextLabel,
  TextAreaStlyed,
  EnviarButton,
  InfoContainer,
  SuccessMessageSent,
  ErrorMessage,
  VolverAHome,
} from "./ContactElements";
import { useAxios } from "hooks/useAxios";
import { useTheme } from "@material-ui/core";
import Loading from "components/Loading/Loading";
import { useHistory } from "react-router";

function Contact() {
  const { pedido } = usePedido();
  const { user } = useAuth();
  const { theme } = useTheme();
  const { pedido: contactPedido, contact, resetAllContact } = useContact();
  const axios = useAxios();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(false);

  const [messageStructure, setMessageStructure] = useState({
    to: "santiagoharkes@gmail.com",
    from: "santiagoharkes@gmail.com",
    replyTo: user ? user.user.email : "",
    subject: "Quiero hacer una consulta",
    text: "",
  });

  useEffect(() => {
    if (user?.user) {
      setMessageStructure({
        ...messageStructure,
        replyTo: user.user.email,
      });
    }

    if (contactPedido && pedido) {
      setMessageStructure({
        ...messageStructure,
        subject: `Tengo una consulta sobre mi pedido - ${pedido.code}`,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, contactPedido, pedido, contact]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/email", messageStructure)
      .then((res) => {
        resetAllContact();
        setMessageStructure({
          ...messageStructure,
          text: "",
        });
        if (res.statusText === "OK") {
          setSuccess(true);
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const backToHome = () => {
    resetAllContact();
    history.push("/");
  };

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Banana Gourmet - Contact</title>
        <meta
          name="description"
          content="Banana Gourmet - Contact - Escribinos para realizar la consulta que desees!"
        />
      </Helmet>
      <HeaderTitle>Contact!</HeaderTitle>
      <HeaderSubtitle>
        Escribinos para realizar cualquier consulta que desees
      </HeaderSubtitle>
      <FormContainer>
        {loading && (
          <FormStyled>
            <Loading h="100" />
          </FormStyled>
        )}

        {success && (
          <>
            <SuccessMessageSent dark={theme}>
              {`Tu mensaje se ha enviado correctamente! Te responderemos a la
              brevedad, muchas gracias por contactarte con nosotros :)`}
            </SuccessMessageSent>
            <VolverAHome onClick={backToHome} dark={theme}>
              Volver a Home
            </VolverAHome>
          </>
        )}

        {error && (
          <>
            <ErrorMessage dark={theme}>
              {`Se produjo un error al enviar tu mensaje! Por favor, volvé e
              intentá nuevamente :) gracias!`}
            </ErrorMessage>
            <VolverAHome onClick={backToHome} dark={theme}>
              Volver a Home
            </VolverAHome>
          </>
        )}
        {!loading && !error && !success && (
          <>
            <InfoContainer dark={theme}>
              {contactPedido ? (
                <>
                  Estás por realizar una consulta sobre el pedido código:
                  <span> {pedido.code}</span>. Te responderemos a la brevedad al
                  siguiente mail: <span>{user?.user?.email}</span>
                </>
              ) : (
                <>
                  Muchas gracias por contactarte con nosotros! Te responderemos
                  a la brevedad al siguiente mail:
                  <span> {user?.user?.email}</span>
                </>
              )}
            </InfoContainer>
            <FormStyled onSubmit={handlerSubmit}>
              <TextLabel htmlFor="text">Escribí tu mensaje acá:</TextLabel>
              <TextAreaStlyed
                onChange={(e) =>
                  setMessageStructure({
                    ...messageStructure,
                    text: e.target.value,
                  })
                }
                value={messageStructure.text}
              />
              <EnviarButton>Enviar!</EnviarButton>
            </FormStyled>
          </>
        )}
      </FormContainer>
    </PageContainer>
  );
}

export default Contact;
