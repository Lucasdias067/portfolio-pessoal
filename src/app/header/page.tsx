"use client"
import "./style.css"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
export default function Header() {

  const [mobileMenu, setMobileMenu] = useState(false);

  const navHeader = [
    { name: "Sobre Mim", href: "#aboutMe", className: "headerLink" },
    { name: "Meus Projetos", href: "#projectList", className: "headerLink" },
    { name: "Habilidades", href: "#skills", className: "headerLink" },
    { name: "Contatos", href: "#contact", className: "headerLink contactBtn" }
  ]

  function openMobileMenu() {
    setMobileMenu(!mobileMenu)
  }

  return (
    <header id="header">
      <div className="header">
        <a href="/" className="linkName">
          <h1>Portfólio</h1>
        </a>
        <div className="navigationHeader">
          {navHeader.map(({ name, href, className }) => (
            <a href={href} className={className} key={name}>{name}</a>
          ))}
        </div>
      </div>

      <div className="headerMobile">
        <div className="menuMobile">
          <a href="/" className="linkName">
            <h1>Portfólio</h1>
          </a>
          <FontAwesomeIcon icon={faBars} size="xl" onClick={openMobileMenu} />
        </div>
        {mobileMenu &&
          <div className="navigationHeader">
            {navHeader.map(({ name, href, className }) => (
              <a href={href} className={className} key={name}>{name}</a>
            ))}
          </div>
        }
      </div>
    </header>
  )
}

