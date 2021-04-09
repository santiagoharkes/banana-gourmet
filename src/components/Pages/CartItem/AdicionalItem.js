import React, { useState } from "react";

import {
  AdicionalesDetails,
  ItemCheck,
  ItemCheckIcon,
} from "./CartItemElements";

function AdicionalItem({ adicional }) {
  const [selectAdicional, setSelectAdicional] = useState(false);

  const onAdicionalSelect = () => {
    setSelectAdicional(!selectAdicional);
  };

  return (
    <AdicionalesDetails onClick={onAdicionalSelect}>
      <p>{adicional.adicional}</p>
      <ItemCheck className={selectAdicional ? "active" : ""}>
        {selectAdicional && <ItemCheckIcon />}
      </ItemCheck>
    </AdicionalesDetails>
  );
}

export default AdicionalItem;
