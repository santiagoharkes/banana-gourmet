import styled from "styled-components";

export const ImageLoginStyled = styled.img`
  max-height: 100px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  padding-bottom: 50px;

  & > div {
    margin: 10px;
  }
`;

export const ButtonSubmitStyled = styled.button`
  width: 100%;
  border-radius: 30px;
  height: 50px;
  background-color: ${(props) => props.theme.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  margin: 20px 0;
  font-size: 1rem;
`;

export const GoToRegister = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.textColor};

  & > span {
    margin-left: 5px;
    color: ${(props) =>
      props.dark === "dark" ? props.theme.yellow : props.theme.textColor};
  }
`;
