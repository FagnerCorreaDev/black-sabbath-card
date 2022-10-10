import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div>
          <img src={props.imagem} alt="img-avatar" />
        </div>
        <div className="nome">
          {props.nome}
        </div>
        <div className="funcao">
          {props.funcao}
        </div>
      </div>
    </div>
      


  )
}
export default Card;