import BurgerVeggie from "../img/burgerVeggie.webp";
import BurgerCheddar from "../img/burgerCheddar.webp";
import BurgerCompleta from "../img/burgerCompleta.webp";

import PizzaTranqui from "../img/pizzaTranqui.webp";
import PizzaFugazzeta from "../img/pizzaFugazzeta.webp";

import SambucheMilanesa from "../img/sambucheMilanesa.webp";
import SambuchePollo from "../img/sambuchePollo.webp";
import SambucheJamon from "../img/sambucheJamon.webp";

import BurgerIcon from "../img/burgerIcon.webp";
import PizzaIcon from "../img/pizzaIcon.webp";
import ChambucheIcon from "../img/sandwichIcon.webp";

export const productos = [
  {
    categoria: "Burgers",
    img: BurgerIcon,
    productos: [
      {
        nombre: "Burger Veggie",
        price: 99.99,
        descripcion: "Una burger veggie con toda la crema veganaaaaaa",
        img: BurgerVeggie,
      },
      {
        nombre: "Burger Cheddar",
        price: 99.99,
        descripcion: "Una burger que te empasta las bujías con sólo verla",
        img: BurgerCheddar,
      },
      {
        nombre: "Burger Completa",
        price: 99.99,
        descripcion:
          "Una full furger, levantavidrios eléctrico, cierre centralizado, tapizado de cuero",
        img: BurgerCompleta,
      },
    ],
  },
  {
    categoria: "Pizzas",
    img: PizzaIcon,
    productos: [
      {
        nombre: "Pizza Tranqui",
        price: 99.99,
        descripcion: "Una pizza normalita pa salir del paso",
        img: PizzaTranqui,
      },
      {
        nombre: "Pizza Fugazzeta",
        price: 99.99,
        descripcion: "Una pizza shena de cebollitas subcampeón",
        img: PizzaFugazzeta,
      },
    ],
  },
  {
    categoria: "Chambuchitos",
    img: ChambucheIcon,
    productos: [
      {
        nombre: "Sambuche de Milanga",
        price: 99.99,
        descripcion:
          "Una sambuche de milanga pa bajonear a las 6am cuando volvés del boliche",
        img: SambucheMilanesa,
      },
      {
        nombre: "Sambuche de Pollo",
        price: 99.99,
        descripcion:
          "Un sambuche pa ponerse en exquisito cuando te querés hacer el gourmet",
        img: SambuchePollo,
      },
      {
        nombre: "Sambuche de Jamon",
        price: 19.99,
        descripcion: "Un sambuche medio pelo pero está baratoooooo anti ajuste",
        img: SambucheJamon,
      },
    ],
  },
];
