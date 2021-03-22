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

export const TestEmailStyled = styled(GoToRegister)`
  margin-top: 20px;
  opacity: 0.3;
`;

export const FormContainer = styled.div`
  padding-bottom: 70px;
`;
