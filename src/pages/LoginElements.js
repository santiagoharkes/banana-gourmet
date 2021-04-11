import styled from "styled-components";

export const ImageLoginStyled = styled.img`
  max-height: 100px;
  margin-bottom: 20px;
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

export const TestEmailContainer = styled.div`
  margin-top: 10px;
`;

export const TestEmailStyled = styled(GoToRegister)`
  margin-bottom: 5px;
  opacity: 0.2;
`;

export const FormContainer = styled.div`
  padding-bottom: 70px;
`;

export const InputError = styled.p`
  color: red;
  font-size: 0.75em;
`;

export const ForgotPasswordStyled = styled.p`
  margin: 5px 0;
  color: ${(props) => props.theme.subtitleColor};
  cursor: pointer;
  text-align: center;
`;

export const GoogleLoginButton = styled.div`
  width: auto;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 20px;

  & img {
    max-width: 20px;
    margin: 0 10px;
  }
`;

export const GithubLoginButton = styled(GoogleLoginButton)`
  background: #272727;
  color: #eaeaea;
`;
