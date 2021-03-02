import styled from "styled-components";

export const PageContainerStyled = styled.div`
  background-color: ${(props) =>
    props.bgColor
      ? props.bgColor
      : props.theme === "dark"
      ? "#1b1b22"
      : "#fafafa"};
  padding: 50px 20px 20px;
  height: 100%;
  width: 100%;
  overflow: scroll;
  transition: all 0.5s ease;
`;
