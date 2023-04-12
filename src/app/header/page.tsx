import Link from "next/link"
import "./style.css"

export default function Header() {

  return (
    <header id="header">
      <Link href="/" className="link-name">
        <h1>Portfólio</h1>
      </Link>
      <div className="navigation_header">
        <a href="#aboutMe" className="link-header">Sobre Mim</a>
        <a href="#projectList" className="link-header">Meus Projetos</a>
        <a href="#skills" className="link-header">Habilidades</a>
        <a href="#contact" className="link-header projetos-btn">Contatos</a>
      </div>
    </header>
  )
}
