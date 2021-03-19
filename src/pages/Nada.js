import { TituloNada, Explicacion, VolverAtras } from "./NadaElements";

import PageContainer from "components/PageContainer/PageContainer";

import { Link } from "react-router-dom";

function Home() {
  return (
    <PageContainer bgColor="#ff002d">
      <TituloNada>
        NO<span>HAY</span>
        <span>NADA</span>
      </TituloNada>
      <Explicacion>
        Todavía no hay nada en funcionamiento, así que te recomiendo que vuelvas
        atrás y esperes a que me ponga a laburar
      </Explicacion>
      <Link replace to="/">
        <VolverAtras>VOLVER</VolverAtras>
      </Link>
    </PageContainer>
  );
}

export default Home;

// DOCS

// PageContainer

// Si se le pasa bgColor, toma ese color de fondo. El color es cualquier color válido en css "red, #fff, etc" como string
// Sino, por defecto es el del tema (dark o light)
