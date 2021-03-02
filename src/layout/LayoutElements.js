import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    circle,
    rgb(${(props) => (props.theme === "dark" ? "250, 250, 250" : "53, 53, 53")})
      0%,
    rgb(${(props) => (props.theme === "dark" ? "242, 242, 242" : "27, 27, 34")})
      100%
  );
`;
