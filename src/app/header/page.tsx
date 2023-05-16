"use client"
import "./style.css"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
export default function Header() {

  const [menu, setMenu] = useState(false);

  const navHeader = [
    { name: "Sobre Mim", href: "#aboutMe", className: "link-header" },
    { name: "Meus Projetos", href: "#projectList", className: "link-header" },
    { name: "Habilidades", href: "#skills", className: "link-header" },
    { name: "Contatos", href: "#contact", className: "link-header projetos-btn" }
  ]

  function openMenu() {
    setMenu(!menu)
  }

  return (
    <header id="header">
      <div className="header">
        <a href="/" className="link-name">
          <h1>Portfólio</h1>
        </a>
        <div className="navigation_header">
          {navHeader.map(({ name, href, className }) => (
            <a href={href} className={className} key={name}>{name}</a>
          ))}
        </div>
      </div>

      <div className="headerMobile">
        <div className="menuMobile">
          <a href="/" className="link-name">
            <h1>Portfólio</h1>
          </a>
          <FontAwesomeIcon icon={faBars} size="xl" onClick={openMenu} />
        </div>
        {menu &&
          <div className="navigation_header">
            {navHeader.map(({ name, href, className }) => (
              <a href={href} className={className} key={name}>{name}</a>
            ))}
          </div>
        }
      </div>
    </header>
  )
}

