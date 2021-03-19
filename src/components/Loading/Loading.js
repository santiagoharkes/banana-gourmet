import React from "react";

import ZapiLogo from "../../img/zapilogo.webp";

import { LoadingContainerStyled, ZapiLogoStyled } from "./LoadingElements";

function Loading({ h }) {
  return (
    <LoadingContainerStyled height={h}>
      <ZapiLogoStyled src={ZapiLogo} />
    </LoadingContainerStyled>
  );
}

export default Loading;
