import styled from "styled-components";

export const PedidoContainerStyled = styled.div`
  padding: 20px 0;
  padding-bottom: 80px;
`;

export const TicketContainerStyled = styled.div`
  border: 1px solid
    ${(props) => (props.dark === "dark" ? "#4f4f4f" : "#d7d7d7")};
  border-radius: 30px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const TicketItemStyled = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.adicionales ? "10% 1fr 25%" : "10% 1fr 25%"};
  grid-template-rows: ${(props) => (props.adicionales ? "auto auto" : "1fr")};
  grid-template-areas: ${(props) =>
    props.adicionales
      ? "'unidades titulo precio' 'adicionales adicionales adicionales'"
      : "'unidades titulo precio'"};
  text-align: center;
  color: ${(props) => props.theme.textColor};
  border-top: ${(props) =>
    props.borderTop &&
    `1px solid ${props.dark === "dark" ? "#4f4f4f" : "#d7d7d7"}`};

  & .precio {
    text-align: right;
  }

  @media screen and (max-width: 330px) {
    grid-template-columns: 10% 1fr 30%;
  }
`;

export const AdicionalesTitle = styled.p`
  padding: 5px;
  border-bottom: 1px solid ${(props) => props.theme.backgroundColorSecondary};
`;

export const TicketItemUnidades = styled.p`
  grid-area: unidades;
`;
export const TicketItemTitulo = styled.p`
  grid-area: titulo;
`;
export const TicketItemPrecio = styled.p`
  grid-area: precio;
`;
export const TicketItemAdicionales = styled.div`
  grid-area: adicionales;
  font-size: 0.75em;
  margin: 10px 0;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.backgroundColorSecondary};
  padding: 5px 0;
`;

export const AdicionalesContainer = styled.div`
  /* display: grid; */
  /* grid-template-columns: 10% 1fr 25%; */
  /* grid-template-areas: "titulo titulo titulo" ". nombre precio"; */
  /* grid-auto-rows: 1fr; */
  /* grid-auto-flow: row; */
  gap: 5px;
  margin: 5px 0;
`;

export const AdicionalesContainerTitulo = styled.div`
  grid-area: titulo;
  background: ${(props) => props.theme.backgroundColorSecondary};
  margin: 5px 0;
`;

export const AdicionalesContainerNombre = styled.div`
  grid-area: nombre;
`;

export const AdicionalesContainerPrecio = styled.div`
  grid-area: precio;
`;

export const AdicionalContainerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 80%;
`;

export const TicketTitle = styled(TicketItemStyled)`
  opacity: 0.4;
`;

export const SubtotalTitle = styled(TicketItemStyled)`
  grid-template-columns: 1fr minmax(25%, auto);
  text-align: right;
  gap: 20px;
  font-weight: bold;
  border-bottom: ${(props) =>
    props.borderBottom &&
    `1px solid ${props.dark === "dark" ? "#4f4f4f" : "#d7d7d7"}`};
  grid-template-areas: unset;

  @media screen and (max-width: 330px) {
    grid-template-columns: 1fr 30%;
  }
`;

export const EnvioPropinaStyled = styled(SubtotalTitle)`
  font-weight: normal;
`;

export const CodigoTitle = styled(TicketItemStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid
    ${(props) => (props.dark === "dark" ? "#4f4f4f" : "#d7d7d7")};

  & * {
    user-select: text;
  }

  & span {
    font-weight: bold;
    margin: 0 10px;
  }
`;

export const EstadoPedidoStyled = styled(TicketContainerStyled)`
  color: ${(props) =>
    props.dark === "dark"
      ? props.theme.successBackground
      : props.theme.textColor};
  background: ${(props) =>
    props.dark === "dark"
      ? props.theme.backgroundColor
      : props.theme.successBackground};
  text-align: center;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const EstadoEnvioStyled = styled(EstadoPedidoStyled)`
  text-align: center;
  color: ${(props) =>
    props.dark === "dark"
      ? props.theme.backgroundColor
      : props.theme.textColor};
  padding: 20px;
  background: ${(props) =>
    props.estado === 1
      ? props.theme.pendingBackground
      : props.estado === 2
      ? props.theme.yendoBackground
      : props.theme.successBackground};
`;

export const DetailItemStyled = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  color: ${(props) => props.theme.textColor};
`;

export const OtrosDatos = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.textColor};
  width: 100%;
  color: ${(props) => props.theme.textColor};
  padding: 10px;
`;

export const DetailTitle = styled.p`
  font-weight: bold;
`;
