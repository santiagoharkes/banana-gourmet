import React from "react";

import { LittleLoadingStyled } from "./LittleLoadingElements";

function LittleLoading({ dark }) {
  return (
    <LittleLoadingStyled dark={dark}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LittleLoadingStyled>
  );
}

export default LittleLoading;
