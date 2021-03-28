import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const HeartIconInactiveStyled = styled(FavoriteBorderIcon)`
  color: ${(props) => (props.dark === "dark" ? props.theme.yellow : "red")};
  padding: 5px;
  width: 1.3em !important;
  height: 1.3em !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeartIconActiveStyled = styled(FavoriteIcon)`
  color: ${(props) => (props.dark === "dark" ? props.theme.yellow : "red")};
  padding: 5px;
  width: 1.3em !important;
  height: 1.3em !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
