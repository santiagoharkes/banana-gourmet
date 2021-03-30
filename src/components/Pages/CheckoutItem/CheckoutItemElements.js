import styled from "styled-components";

export const ItemContainerStyled = styled.div`
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  min-height: 50px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 30% 1fr 30%;
  padding: 10px 20px;
  margin-bottom: 20px;
  place-items: center;
  gap: 15px;
  position: relative;
  will-change: transform;
  position: relative;
`;

export const ItemUnitsStyled = styled.div`
  background-color: ${(props) => props.theme.yellow};
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 0.75em;
  text-align: center;
  width: 100%;
`;

export const TextStyled = styled.p`
  color: ${(props) => props.theme.textColor};
  text-align: center;
`;
