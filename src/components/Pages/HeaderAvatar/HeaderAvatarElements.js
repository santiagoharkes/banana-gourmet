import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";

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

export const AvatarIcon = styled(PersonIcon)`
  width: 50px !important;
  height: 50px !important;
  border-radius: 15px;
  background-color: ${(props) => props.theme.yellow};
  padding: 5px 0 0;
  object-fit: contain;
  border: 1px solid #fbc320;
  cursor: pointer;
`;
