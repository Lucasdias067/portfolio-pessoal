"use client"
import Link from "next/link"
import projectsLists from "../../assets/projetos.json"
import { useState } from "react"
import "./style.css"

type Projects = typeof projectsLists

export default function ProjectsList() {

  const [projects, setProjects] = useState(projectsLists);
  const [activeButton, setActiveButton] = useState("");
  const [activeBool, setActiveBool] = useState(false);

  function filterProjects(e: React.MouseEvent<HTMLButtonElement>) {
    const { name } = e.target as HTMLButtonElement
    const filteredProjects = projectsLists.filter(({ category }) => category === name);
    const isProjectFiltered = projects.length === filteredProjects.length

    const hasSameCategory = projects.some(({ category }) => {
      const sameCategory = category === name
      return sameCategory
    })
    filteringProjects(name, isProjectFiltered, hasSameCategory, filteredProjects)
  }

  function filteringProjects(name: string, isProjectFiltered: boolean, hasSameCategory: boolean, filteredProjects: Projects) {
    if (!isProjectFiltered || !hasSameCategory) {
      hasProjectsFiltered(name)
      return setProjects(filteredProjects)
    }
    setActiveBool(false)
    setProjects(projectsLists)
  }

  function hasProjectsFiltered(name: string) {
    setActiveButton(name)
    setActiveBool(true)
  }

  function activeStyle(name: string) {
    const sameName = name === activeButton
    if (sameName && activeBool) return "active";
    return ""
  }

  return (
    <section id="projectList">
      <div className="centralizar">
        <h1 className="titulos">
          Projetos
          <div className="effect"></div>
        </h1>
        <div className="container-filter">
          <button name="JavaScript" onClick={filterProjects} id={activeStyle("JavaScript")}>JavaScript</button>
          <button name="React" onClick={filterProjects} id={activeStyle("React")}>React</button>
          <button name="Next" onClick={filterProjects} id={activeStyle("Next")}>Next</button>
          <button name="React Native" onClick={filterProjects} id={activeStyle("React Native")}>React Native</button>
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
