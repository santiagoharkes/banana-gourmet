import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 375px;
  max-height: 740px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 0px 10px #00000029;
  position: relative;
  padding-top: 50px;
`;

// export const MainContainerColor = styled(MainContainer)`
//   background-color: ${(props) => {
//     return props.color ? props.color : "red";
//   }};
// `;

// export const MainContainerImage = styled(MainContainer)`
//   background-image: ${(props) => (props.url ? `url(${props.url})` : "none")};
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
// `;
