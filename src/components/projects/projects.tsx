import "./projects.css";
import React, { useState } from "react";
import ReactModal from "react-modal";
import logoAppBom from "../../assets/logo_appbom 1.png";
import bot from "../../assets/conversando.png";
import nearby from "../../assets/ic_nearby_launcher_round.webp";
import bannerNearBy from "../../assets/banner_near_by.png";

ReactModal.setAppElement("#root");

export default function ProjectsComponent() {
  type Project = {
    projectName: string;
    descriptionProject: string;
    pathImage: { src: string };
    comoFunciona: string;
    motivoParaDesenvolvimento: string;
    tecnologies: String;
  };

  const projects: Project[] = [
    {
      projectName: "Nearby",
      descriptionProject: "",
      pathImage: { src: bannerNearBy },
      comoFunciona: "Descrição de como o chatbot funciona.",
      motivoParaDesenvolvimento: "Motivo para o desenvolvimento do chatbot.",
      tecnologies: "React",
    },
    {
      projectName: "APP B.O.M",
      descriptionProject: "Aplicativo de mobilidade urbana.",
      pathImage: { src: "" },
      comoFunciona: "Descrição do funcionamento do APP B.O.M",
      motivoParaDesenvolvimento: "Motivo para o desenvolvimento do APP B.O.M.",
      tecnologies: "React",
    },
    {
      projectName: "APP B.O.M MOTORISTA",
      descriptionProject: "Aplicativo voltado para motoristas.",
      pathImage: { src: "" },
      comoFunciona: "Descrição do funcionamento do APP B.O.M Motorista.",
      motivoParaDesenvolvimento:
        "Motivo para o desenvolvimento do APP B.O.M Motorista.",
      tecnologies: "React",
    },
    {
      projectName: "ChatBot de atendimento",
      descriptionProject: "Bot para atendimento via WhatsApp.",
      pathImage: { src: "" },
      comoFunciona: "Descrição de como o chatbot funciona.",
      motivoParaDesenvolvimento: "Motivo para o desenvolvimento do chatbot.",
      tecnologies: "React",
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function openModal(project: Project) {
    setSelectedProject(project);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedProject(null);
  }

  return (
    <div className="container">
      {projects.map((project, index) => (
        <div key={index} id="box">
          <img id="banner" src={project.pathImage.src} alt="" />
          <div id="desc_pj">
            <h1 id="name_project">{project.projectName}</h1>
            <h2 id="description_project">{project.descriptionProject}</h2>
            <h3 id="tecnologies">{project.tecnologies}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <div id="container_projects">
      {projects.map((project, index) => (
        <div key={index} id="list_projects">
          <h1>{project.projectName}</h1>
          <div id="banner_projects" onClick={() => openModal(project)}>
            <img src={project.pathImage.src} alt={project.projectName} />
          </div>
          <h2>{project.descriptionProject}</h2>
        </div>
      ))}

      {selectedProject && (
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div id="appbar_modal">
            <button onClick={closeModal}>Fechar</button>
          </div>

          <h1 id="name_project">{selectedProject.projectName}</h1>
          <h3 id="about_project">Como este projeto funciona?</h3>
          <h4 id="description_about_project">{selectedProject.comoFunciona}</h4>

          <h3 id="motivo">Motivo para desenvolvimento:</h3>
          <h4 id="desc_motivo">{selectedProject.motivoParaDesenvolvimento}</h4>
        </ReactModal>
      )}
    </div> */
}
