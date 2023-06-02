"use client"
import "./style.css";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {

  const linkFooter = [
    { name: "Sobre Mim", href: "#aboutMe", className: "footerLink" },
    { name: "Meus Projetos", href: "#projectList", className: "footerLink" },
    { name: "Habilidades", href: "#skills", className: "footerLink" },
    { name: "Contatos", href: "#contact", className: "footerLink" }
  ]

  function handleScroll() {
    window.scrollTo(0, 0)
  }

  return (
    <footer>
      <div>
        <a href="/" id="linkName2">
          <h2>Portfólio</h2>
        </a>
      </div>
      <div className="footer js-linksInternos">
        {linkFooter.map(({ name, href, className }) => (
          <a href={href} className={className} key={name} title={name}>{name}</a>
        ))}
      </div>
      <FontAwesomeIcon
        icon={faCircleArrowUp}
        onClick={() => handleScroll()}
        className="scrollUp"
        size="3x"
        beatFade
        title="Scroll Up"
      />
    </footer>
  )
}
