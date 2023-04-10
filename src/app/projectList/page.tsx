"use client"
import Link from "next/link"
import projectsLists from "../../assets/projetos.json"
import { useState } from "react"
import "./style.css"

export default function ProjectsList() {

  const [projects, setProjects] = useState(projectsLists);
  const [projectsBool, setProjectsBool] = useState(false);

  function filterIsTrue(name: string, projectsBool: boolean) {
    const filtered = projectsLists.filter(({ category }) => category === name);
    setProjects(projectsBool ? filtered : projectsLists);
  }

  function filterFunction(e?: React.MouseEvent<HTMLButtonElement>) {
    const name = (e?.target as HTMLButtonElement)?.name
    setProjectsBool(prevProjectsBool => !prevProjectsBool)
    filterIsTrue(name, !projectsBool)
  }

  return (
    <section id="projectList">
      <div className="centralizar">
        <h1 className="titulos">
          Projetos
          <div className="effect"></div>
        </h1>
        <div className="container-filter">
          <button name="JavaScript" onClick={filterFunction}>JavaScript</button>
          <button name="React" onClick={filterFunction}>React</button>
          <button name="Next" onClick={filterFunction}>Next</button>
          <button name="React Native" onClick={filterFunction}>React Native</button>
        </div>
      </div>
      <div className="divisao-sessao">
        <div className="container">
          {projects.map(({ id, linkPage, title, description, linkGithub }) => (
            <div className="card-projeto" key={id}>
              <div className="face face1">
                <div>
                  <Link href={linkPage} target="_blank">
                    <h3>{title}</h3>
                  </Link>
                </div>
              </div>
              <div className="face face2">
                <div>
                  <p>{description}</p>
                  <Link href={linkGithub} target="_blank">Respositório</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}
