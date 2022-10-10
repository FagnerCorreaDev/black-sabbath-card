import React from "react";
import integrantes from "../integrantes"
import Card from "./Card";
import Logo from "./Logo";

function criarIntegrante(integrante) {
  return (
    <div>
      <Card
        key={integrante.id}
        imagem={integrante.imagem}
        nome={integrante.nome}
        funcao={integrante.funcao}
      />
    </div>
  )
}

function App() {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div  className="container">
        {integrantes.map(criarIntegrante)}
      </div>
    </div>
  )
}
export default App;