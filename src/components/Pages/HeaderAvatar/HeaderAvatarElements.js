import styled from "styled-components";

export const AvatarImageStyled = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.yellow};
  padding: 5px 0 0;
  object-fit: contain;
  border: 1px solid #fbc320;
  cursor: pointer;
`;
