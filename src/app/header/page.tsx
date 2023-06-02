"use client"
import "./style.css"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
export default function Header() {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [navTagName, setNavTagName] = useState("");

  const navHeader = [
    { name: "Sobre Mim", href: "#aboutMe", className: "headerLink" },
    { name: "Meus Projetos", href: "#projectList", className: "headerLink" },
    { name: "Habilidades", href: "#skills", className: "headerLink" },
    { name: "Contatos", href: "#contact", className: "headerLink contactBtn" }
  ]

  let timeOut: NodeJS.Timeout | null;

  function toggleId(name: string) {
    const isTheSameTag = navTagName === name;
    if (isTheSameTag) return "activeAnchor";
    return ""
  }

  function handleTagName(name: string) {
    setNavTagName(name);
    if (timeOut) {
      clearTimeout(timeOut);
      timeOut = null;
    }
    timeOut = setTimeout(() => {
      setNavTagName('');
    }, 2500);
  }

  function openMobileMenu() {
    setMobileMenu(!mobileMenu)
  }

  function changeMobileIcon() {
    const iconState = mobileMenu ? faClose : faBars;
    return iconState;
  }

  return (
    <header id="header">
      <div className="header">
        <a href="/" className="linkName">
          <h1>Portfólio</h1>
        </a>
        <div className="navigationHeader">
          {navHeader.map(({ name, href, className }) => (
            <a
              href={href}
              className={className}
              key={name}
              onClick={() => handleTagName(name)}
              id={toggleId(name)}
              title={name}
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      <div className="headerMobile">
        <div className="menuMobile">
          <a href="/" className="linkName">
            <h1>Portfólio</h1>
          </a>
          <FontAwesomeIcon icon={changeMobileIcon()} size="xl" onClick={openMobileMenu} />
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

