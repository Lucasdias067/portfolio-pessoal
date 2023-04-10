"use client"
import Link from "next/link"
import { useState } from "react"
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCopy, faLinkSlash, faCheckCircle } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {

  const [showModal, setShowModal] = useState(false);

  const copy = "lucasdias067@gmail.com";

  function clipboard() {
    navigator.clipboard.writeText(copy)
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false)
    }, 5000)
  }

  return (
    <section id="contact">
      <div className="centralizar">
        <h1 className="titulos">
          Contato
          <div className="effect"></div>
        </h1>
        <p className="contact-p">Para mais informações, entrar em contato via e-mail ou através das redes sociais abaixo.</p>
        <h2 className="email">
          <FontAwesomeIcon icon={faLinkSlash} size="xs" />
          lucasdias067@gmail.com
          <span title="Clique para copiar" onClick={clipboard}>
            <FontAwesomeIcon icon={faCopy} size="xl" />
          </span>
        </h2>
        {showModal && (
        <div className="modal">
          <FontAwesomeIcon icon={faCheckCircle} size="1x" />
          <p>Copiado para a área de transferência</p>
        </div>
      )}
        <div>
          <Link href="https://github.com/Lucasdias067/" target="_blank" className="link-contato" title="GitHub">
            <FontAwesomeIcon icon={faGithub} size="3x" beatFade />
          </Link>
          <Link href="https://www.linkedin.com/in/lucasdias067/" target="_blank" className="link-contato" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="3x" beatFade />
          </Link>
        </div>
      </div>
    </section>)
}
