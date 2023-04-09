import Link from "next/link";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

  return (
    <footer>
      <div>
        <a href="/" id="link-name2">
          <h2>Portfólio</h2>
        </a>
      </div>
      <div className="rodape js-linksInternos">
        <a href="#" className="link-rodape">Início</a>
        <a href="#aboutMe" className="link-rodape">Sobre Mim</a>
        <a href="#projectList" className="link-rodape">Projetos</a>
        <a href="#skills" className="link-rodape">Habilidades</a>
        <a href="#contact" className="link-rodape">Contato</a>
      </div>
    </footer>
  )
}
