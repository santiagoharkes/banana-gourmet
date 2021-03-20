import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HeaderSubtitle from "components/Pages/HeaderSubtitle/HeaderSubtitle";

export const ProductContainerStyled = styled.div`
  width: 100%;
`;

export const ProductImageStyled = styled.div`
  max-height: 300px;
  overflow: hidden;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    transition: 0.3s ease;
    width: 100%;
    height: 200px;
    object-position: center;
    border-radius: 30px;
  }
`;

export const DescriptionTitle = styled.p`
  ${HeaderSubtitle}
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => props.theme.textColor};
`;

export const TitleContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeartIconInactiveStyled = styled(FavoriteBorderIcon)`
  color: ${(props) =>
    props.theme.dark === "dark" ? props.theme.yellow : "red"};
  padding: 5px;
  width: 1.3em !important;
  height: 1.3em !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeartIconActiveStyled = styled(FavoriteIcon)`
  color: ${(props) =>
    props.theme.dark === "dark" ? props.theme.yellow : "red"};
  padding: 5px;
  width: 1.3em !important;
  height: 1.3em !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
