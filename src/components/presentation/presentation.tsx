import "./presentation.css";
import React from "react";
import foto from "../../assets/dev.png";

export default function Presentation() {
  return (
    <div id="container_presentation">
      <div id="presentation">
        <span id="span_texts">
          <h3>Olá, meu nome é</h3>
          <h1>Danilo Souza Silva</h1>
          <h1>Sou desenvolvedor Fullstack</h1>
          <h4>
            Sou um desenvolvedor fullstack,
            <br /> focado em aplicações mobile / web,
            <br /> buscando sempre prover provendo a satisfação dos meus
            clientes.
          </h4>
          <div id="btn">Baixar curriculo</div>
        </span>
      </div>

      <img id="img_presentation" src={foto} alt="" />
    </div>
  );
}
