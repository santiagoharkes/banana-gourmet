import styled from "styled-components";

export const HeaderTitleStyled = styled.h2`
  color: ${(props) => (props.color ? props.color : props.theme.textColor)};
  font-size: 1.5rem;
  margin-bottom: 5px;
`;
