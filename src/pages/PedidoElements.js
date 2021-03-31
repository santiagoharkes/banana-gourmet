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
`;

export const TicketItemStyled = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: 10% 1fr 20%;
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

export const TicketTitle = styled(TicketItemStyled)`
  opacity: 0.4;
`;

export const SubtotalTitle = styled(TicketItemStyled)`
  grid-template-columns: 1fr 25%;
  text-align: right;
  gap: 20px;
  font-weight: bold;
  border-bottom: ${(props) =>
    props.borderBottom &&
    `1px solid ${props.dark === "dark" ? "#4f4f4f" : "#d7d7d7"}`};

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

  & span {
    font-weight: bold;
    margin: 0 10px;
  }
`;

export const EstadoPedidoStyled = styled(TicketContainerStyled)`
  background: ${(props) => props.theme.successBackground};
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px;
`;

export const EstadoEnvioStyled = styled(EstadoPedidoStyled)`
  background: ${(props) =>
    props.estado === 1
      ? props.theme.pendingBackground
      : props.estado === 2
      ? props.theme.yendoBackground
      : props.theme.successBackground};
`;
