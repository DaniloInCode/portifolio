import "./skills.css";
import React, { ReactElement, useEffect, useRef } from "react";

export default function Skills() {
  let reference = useRef<HTMLDivElement>(null);

  type Skill = {
    nameSkill: String;
    porcentagem: String;
  };

  const skills: Skill[] = [
    {
      nameSkill: "Flutter",
      porcentagem: "70",
    },
    {
      nameSkill: "Dart",
      porcentagem: "75",
    },
    {
      nameSkill: "Kotlin",
      porcentagem: "40",
    },
    {
      nameSkill: "Html",
      porcentagem: "40",
    },
    {
      nameSkill: "Css",
      porcentagem: "40",
    },
    {
      nameSkill: "JavaScript",
      porcentagem: "40",
    },
    {
      nameSkill: "React",
      porcentagem: "40",
    },
    {
      nameSkill: "React",
      porcentagem: "40",
    },
  ];

  return (
    <div id="container_skills">
      {skills.map((skill, index) => (
        <div key={index} id="skill_box">
          <div id="props_skills">
            <h2>{skill.nameSkill}</h2>
            <h2>{skill.porcentagem}%</h2>
          </div>
          <div id="skill_bar_fill_max">
            <div
              id="skill_percent"
              style={{ width: `${skill.porcentagem}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
