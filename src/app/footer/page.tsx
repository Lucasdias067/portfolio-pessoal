import "./style.css";

export default function Footer() {

  const linkFooter = [
    { name: "Inicio", href: "#", className: "link-rodape" },
    { name: "Sobre Mim", href: "#aboutMe", className: "link-rodape" },
    { name: "Meus Projetos", href: "#projectList", className: "link-rodape" },
    { name: "Habilidades", href: "#skills", className: "link-rodape" },
    { name: "Contatos", href: "#contact", className: "link-rodape" }
  ]

  return (
    <footer>
      <div>
        <a href="/" id="link-name2">
          <h2>Portfólio</h2>
        </a>
      </div>
      <div className="rodape js-linksInternos">
        {linkFooter.map(({ name, href, className }) => (
          <a href={href} className={className}>{name}</a>
        ))}
      </div>
    </footer>
  )
}
