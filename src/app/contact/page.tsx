'use client';
import Link from 'next/link';
import { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faCopy,
  faLinkSlash,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const myEmail = 'lucasdias067@gmail.com';

  function clipBoard() {
    navigator.clipboard.writeText(myEmail);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3500);
  }

  return (
    <section id='contact'>
      <div className='centered'>
        <h1 className='titles' title='Contato'>
          Contato
          <div className='effect'></div>
        </h1>
        <p className='contactP'>
          Entrar em contato via e-mail ou através das redes sociais abaixo para
          mais informações sobre o meu trabalho.
        </p>
        <h2 className='email'>
          <Link href='mailto:lucasdias067@gmail.com'>
            <FontAwesomeIcon icon={faLinkSlash} size='xs' />
            {myEmail}
          </Link>
          <span title='Clique para copiar' onClick={clipBoard}>
            <FontAwesomeIcon icon={faCopy} size='lg' fade />
          </span>
        </h2>
        {showModal && (
          <div className='modal'>
            <FontAwesomeIcon icon={faCheckCircle} size='1x' />
            <p>Copiado para a área de transferência</p>
          </div>
        )}
        <div>
          <Link
            href='https://github.com/Lucasdias067/'
            target='_blank'
            className='contactLink'
            title='GitHub'
          >
            <FontAwesomeIcon icon={faGithub} size='3x' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/lucasdias067/'
            target='_blank'
            className='contactLink'
            title='LinkedIn'
          >
            <FontAwesomeIcon icon={faLinkedin} size='3x' />
          </Link>
        </div>
      </div>
    </section>
  );
}
