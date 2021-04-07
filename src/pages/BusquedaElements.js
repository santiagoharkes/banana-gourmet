import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

export const SearchContainer = styled.div`
  margin: 20px 0;
  padding-bottom: 50px;
`;

export const InputContainerStyled = styled.form`
  border-radius: 30px;
  border: none;
  padding: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  &.error {
    border: 1px solid ${(props) => props.theme.errorBackground};
  }
`;

export const InputStyled = styled.input`
  outline: none;
  height: 100%;
  background: transparent;
  outline: none;
  border: none;
  width: 100%;
  padding: 0 5px;
  color: ${(props) => props.theme.textColor};
  user-select: text;
`;

export const ButtonSubmitContainer = styled.button`
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchIconStyled = styled(SearchIcon)`
  border-radius: 50%;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.black};
  height: 1.5em !important;
  width: 1.5em !important;
  /* position: absolute;
  top: 0;
  right: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

export const ClearIconStyled = styled(ClearIcon)`
  border-radius: 50%;
  color: ${(props) => props.theme.textColor};
  height: 2em !important;
  width: 2em !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  cursor: pointer;
  font-size: 1em !important;
  margin: 0 10px;
`;

export const ProductosContainer = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 47%);
  gap: 20px;
  row-gap: 20px;
`;

export const NoProductsContainer = styled.div`
  padding: 20px 0;
`;

export const NoProductsText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const SearchImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  margin-top: 30px;

  animation-duration: 5s;
  animation-name: girar;
  animation-iteration-count: infinite;
  /* animation-timing-function: cubic-bezier(0.14, 1.38, 0.78, -0.18); */
  animation-timing-function: cubic-bezier(0.48, 1.61, 0.51, -0.51);

  transform: rotate(360deg);

  @keyframes girar {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(00deg);
    }
  }
`;

export const SearchImage = styled.img`
  max-width: 100px;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.errorBackground};
  text-align: center;
  margin-top: 10px;
`;
