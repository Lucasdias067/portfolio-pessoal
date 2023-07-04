'use client';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import './style.css';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [mobileWidth, setMobileWidth] = useState(false);

  const linkFooter = [
    { name: 'Sobre Mim', href: '#aboutMe', className: 'footerLink styleNav' },
    {
      name: 'Meus Projetos',
      href: '#projectList',
      className: 'footerLink styleNav'
    },
    { name: 'Habilidades', href: '#skills', className: 'footerLink styleNav' },
    { name: 'Contatos', href: '#contact', className: 'footerLink styleNav' }
  ];

  function handleScroll() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    scrollToTop();
  }

  useEffect(() => {
    function widthWatcher() {
      if (window.innerWidth <= 768) return setMobileWidth(true);
      setMobileWidth(false);
    }

    widthWatcher();

    window.addEventListener('resize', widthWatcher);

    return () => {
      window.removeEventListener('resize', widthWatcher);
    };
  }, []);

  function iconSize(): SizeProp {
    if (mobileWidth) return '2x';
    return '3x';
  }

  return (
    <footer>
      <div>
        <a href='/' id='linkName2'>
          <h2>Portfólio</h2>
        </a>
      </div>
      <div className='footer js-linksInternos'>
        {linkFooter.map(({ name, href, className }) => (
          <a href={href} className={className} key={name} title={name}>
            {name}
          </a>
        ))}
      </div>
      <div className='scrollUp' onClick={handleScroll} title='Voltar ao topo'>
        <FontAwesomeIcon icon={faCircleArrowUp} size={iconSize()} beatFade />
      </div>
    </footer>
  );
}
