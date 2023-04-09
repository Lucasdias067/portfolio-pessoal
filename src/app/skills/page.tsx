"use client"
import "./style.css"
import cSharp from "../../assets/icons/brand-c-sharp.svg"
import JavaScript from "../../assets/icons/brand-javascript.svg"
import React from "../../assets/icons/brand-react.svg"
import ReactNative from "../../assets/icons/brand-react-native.svg"
import NextJs from "../../assets/icons/brand-nextjs.svg"
import Sql from "../../assets/icons/sql.svg"
import Image from "next/image"

interface skillsProps {
  icon: HTMLImageElement;
  skill: string;
  description: string
}

export default function MySkills() {

  const mySkills: skillsProps[] = [
    {
      icon: JavaScript,
      skill: "JavaScript",
      description: "JavaScript é uma linguagem de programação interpretada, utilizada tanto no lado do cliente quanto do servidor para a criação de aplicações web interativas e dinâmicas.",
    },
    {
      icon: React,
      skill: "React",
      description: "React é uma biblioteca JavaScript para construção de interfaces de usuário, que permite criar componentes reutilizáveis para a construção de aplicativos web.",
    },
    {
      icon: NextJs,
      skill: "Next.js",
      description: "Next.js é um framework que permite desenvolver aplicações web com renderização híbrida, com o objetivo de tornar a construção de aplicações web mais eficiente.",
    },
    {
      icon: ReactNative,
      skill: "React Native",
      description: "React Native é um framework para desenvolvimento de aplicativos móveis multiplataforma utilizando React, que permite criar aplicativos nativos para iOS e Android.",
    },
    {
      icon: cSharp,
      skill: "C#",
      description: "C# é uma linguagem de programação orientada a objetos moderna e fortemente tipada e usada principalmente para criar aplicativos para a plataforma .NET.",
    },
    {
      icon: Sql,
      skill: "SQL Server",
      description: "SQL é uma linguagem de programação utilizada para gerenciar e manipular dados em sistemas de gerenciamento de banco de dados relacionais.",
    },
  ]

  return (
    <section id="skills">
      <div className="centralizar">
        <h1 className="titulos">
          Habilidades
          <div className="effect"></div>
        </h1>
        <div className="cards-habilidades">
          {mySkills.map(({ icon, skill, description }) => (
            <div className="card__giratorio">
              <div className="card__giratorio-conteudo">
                <div className="card__giratorio-conteudo--frente">
                  <Image src={icon.src} alt="" width={icon.width = 64} height={icon.height = 64} />
                </div>
                <div className="card__giratorio-conteudo--traseira">
                  <div>
                    <h1>{skill}</h1>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
