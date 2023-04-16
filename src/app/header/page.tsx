import Link from "next/link"
import "./style.css"

export default function Header() {

  const linkHeader = [
    { name: "Sobre Mim", href: "#aboutMe", className: "link-header" },
    { name: "Meus Projetos", href: "#projectList", className: "link-header" },
    { name: "Habilidades", href: "#skills", className: "link-header" },
    { name: "Contatos", href: "#contact", className: "link-header projetos-btn" }
  ]

  return (
    <header id="header">
      <Link href="/" className="link-name">
        <h1>Portfólio</h1>
      </Link>
      <div className="navigation_header">
        {linkHeader.map(({ name, href, className }) => (
          <a href={href} className={className}>{name}</a>
        ))}
      </div>
    </header>
  )
}
