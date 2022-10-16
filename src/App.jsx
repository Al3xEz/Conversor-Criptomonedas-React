import { useState } from "react";
import styled from "@emotion/styled";

import Formulario from "./components/Formulario";
import ImagenCripto from "./img/imagen-criptos.png";

const Contenedor = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: "Lato", "sans-serif";
  color: #343a40;
  text-align: center;
  font-weight: 700;
  margin: 80px 0 50px 0;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #38b000;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  return (
    <Contenedor>
      {/*----------Header----------*/}
      <Imagen src={ImagenCripto} alt="Imagen Cripto" />
      <div>
        <Heading>Conversor de Criptomonedas</Heading>
        <Formulario />
      </div>
    </Contenedor>
  );
}

export default App;
