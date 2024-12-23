import "./experiences.css";
import React from "react";
import Enterprise from "../../entities/enterprise";
import senaiLogo from "../../assets/SENAI_logo_2024.png";
import appBomLogo from "../../assets/Grouplogo-app-bom.png";

export default function Experiences() {
  let experiences: Enterprise[] = [
    {
      name: "Senai",
      imagePath: { src: senaiLogo },
    },
    {
      name: "App Bom",
      imagePath: { src: appBomLogo },
    },
  ];

  return (
    <div id="container_experiences">
      {experiences.map((experience, index) => (
        <div key={index} id="box_experiences">
          <div id="container_img_skils"></div>
          <span id="texts_skils">
            <h3>Estagiário</h3>
            <p>
              Responsável pelo suporte de TI da unidade de ensino e pelo
              desenvolvimento de chatbots e integrações de sistemas com o
              WhatsApp.
            </p>
            <p>Stacks: Python</p>
          </span>
          <div id="bottom_experiences">
            <img src={experience.imagePath.src} height="50" />
          </div>
        </div>
      ))}
    </div>
  );
}
