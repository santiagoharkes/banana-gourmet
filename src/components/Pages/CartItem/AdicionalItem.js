import React, { useState } from "react";

import { useCart } from "Context/Cart/CartContext";
import { useCheckout } from "Context/Checkout/CheckoutContext";

import {
  AdicionalesDetails,
  ItemCheck,
  ItemCheckIcon,
} from "./CartItemElements";

function AdicionalItem({ adicional, producto, index, isActive }) {
  const [isAdicional, setIsAdicional] = useState(isActive);
  const { setExtras, extras } = useCart();
  const { setAdicionales } = useCheckout();

  const onAdicionalSelect = () => {
    setIsAdicional(!isAdicional);

    setExtraItem();
  };

  const setExtraItem = () => {
    const extrasFiltrado = extras?.find((valor) => {
      if (valor.index === index && valor.idProducto === producto._id) {
        return true;
      } else {
        return false;
      }
    });

    const adicionalesFiltrado = extrasFiltrado?.idAdicionales?.find(
      (valor) => valor === adicional._id
    );

    if (extrasFiltrado && Object.keys(extrasFiltrado).length > 0) {
      const arrayBorrar = extrasFiltrado.idAdicionales.filter(
        (valor) => valor !== adicional._id
      );
      const arraySumar = [...extrasFiltrado.idAdicionales, adicional._id];

      let arrayNuevo = [];

      if (!isAdicional) {
        if (adicionalesFiltrado) {
          arrayNuevo = [...extrasFiltrado.idAdicionales];
        } else {
          arrayNuevo = arraySumar;
        }
      } else {
        if (adicionalesFiltrado) {
          arrayNuevo = arrayBorrar;
        } else {
          arrayNuevo = [...extrasFiltrado.idAdicionales];
        }
      }

      const segundoObeto = {
        ...extrasFiltrado,
        idAdicionales: arrayNuevo,
      };

      setExtras(segundoObeto);
    } else {
      const primerObjeto = {
        index: index,
        idProducto: producto._id,
        idAdicionales: [adicional._id],
      };

      setExtras(primerObjeto);
    }

    if (!isAdicional) {
      setAdicionales(adicional.precio);
    } else {
      setAdicionales(-adicional.precio);
    }
  };

  return (
    <AdicionalesDetails onClick={onAdicionalSelect}>
      <p>
        {adicional.adicional} + ${adicional.precio}
      </p>
      <ItemCheck className={isAdicional ? "active" : ""}>
        {isAdicional && <ItemCheckIcon />}
      </ItemCheck>
    </AdicionalesDetails>
  );
}

export default AdicionalItem;
