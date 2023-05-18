import "./style.css";

export default function Footer() {

  const linkFooter = [
    { name: "Inicio", href: "#", className: "footerLink" },
    { name: "Sobre Mim", href: "#aboutMe", className: "footerLink" },
    { name: "Meus Projetos", href: "#projectList", className: "footerLink" },
    { name: "Habilidades", href: "#skills", className: "footerLink" },
    { name: "Contatos", href: "#contact", className: "footerLink" }
  ]

  return (
    <footer>
      <div>
        <a href="/" id="linkName2">
          <h2>Portfólio</h2>
        </a>
      </div>
      <div className="footer js-linksInternos">
        {linkFooter.map(({ name, href, className }) => (
          <a href={href} className={className} key={name}>{name}</a>
        ))}
      </div>
    </footer>
  )
}
