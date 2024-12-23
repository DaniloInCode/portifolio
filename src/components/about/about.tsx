import "./about.css";
import React from "react";
import imageProfile from "../../assets/Design sem nome (1).png";

export default function About() {
  return (
    <div id="container_about">
      <div id="image_about">{/* <img src={imageProfile} alt="" /> */}</div>
      <h2>
        Sou desenvolvedor fullstack com uma forte paixão por tecnologia e
        inovação. Minha jornada profissional é impulsionada pelo desejo
        constante de aprimoramento, tanto nas habilidades técnicas quanto no
        entendimento profundo das necessidades dos projetos que assumo. Trabalho
        com diversas tecnologias para backend e frontend, desenvolvendo
        aplicações robustas, funcionais e voltadas para a melhor experiência do
        usuário. Cada projeto é uma oportunidade de aprender algo novo e de
        superar os desafios de forma criativa e eficaz.
      </h2>
    </div>
  );
}
