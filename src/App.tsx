import "./App.css";
import React, { useState } from "react";
import seta from "./assets/seta-direita.png";
import Header from "./components/header/header";
import Presentation from "./components/presentation/presentation";
import TextSobreposition from "./components/textSobreposition/textsSobreposition";
import About from "./components/about/about";
import ProjectsComponent from "./components/projects/projects";
import Experiences from "./components/experiences/experiences";
import Skills from "./components/skills/skills";
import Mocks from "./model/mockups";

function App() {
  let stacks = new Mocks();

  return (
    <div className="App">
      <Header />
      <Presentation />
      <TextSobreposition text="" textSobreposition="SOBRE MIM" />
      <About />
      <TextSobreposition text="Projetos" textSobreposition="MEUS PROJETOS" />
      <ProjectsComponent />
      <TextSobreposition
        text="Minhas habilidades"
        textSobreposition="HABILIDADES"
      />
      <Skills />
      <TextSobreposition
        text="Minhas experiências"
        textSobreposition="EXPERIÊNCIAS"
      />
      <Experiences />
    </div>
  );
}

export default App;
