import './style.css';
import Link from 'next/link';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Section() {

  return (
    <section className="sessao-inicial" id="sessao-inicial">
      <div className="tamanho-textos">
        <p className="ola">Olá, eu sou</p>
        <h1 className="nome-text">Lucas Dias</h1>
        <p className="desenvolvedor">Desenvolvedor Front-end</p>
        <div className="btn-container">
          <div className="btn-links">
            <Link href="https://github.com/Lucasdias067/" target="_blank" title="GitHub">
              <FontAwesomeIcon icon={faGithub} size='4x' />
            </Link>
            <Link href="https://www.linkedin.com/in/lucasdias067/" target="_blank" title="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size='4x' />
            </Link>
          </div>
          <Link href='/files/CURRICULO.pdf' target="_blank" download rel="noopener noreferrer" title="Download">
            <button>
              Baixar CV
              <FontAwesomeIcon icon={faDownload} size='1x' beatFade />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
