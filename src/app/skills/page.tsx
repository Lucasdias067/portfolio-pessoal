'use client';
import './style.css';
import nodeJs from '../../assets/icons/node-js-icon.svg';
import JavaScript from '../../assets/icons/brand-javascript.svg';
import React from '../../assets/icons/brand-react.svg';
import ReactNative from '../../assets/icons/brand-react-native.svg';
import NextJs from '../../assets/icons/brand-nextjs.svg';
import Sql from '../../assets/icons/sql.svg';
import Image from 'next/image';

interface skillsProps {
  icon: HTMLImageElement;
  skill: string;
  description: string;
}

export default function MySkills() {
  const mySkills: skillsProps[] = [
    {
      icon: JavaScript,
      skill: 'JavaScript',
      description:
        'JavaScript é uma linguagem de programação interpretada, utilizada tanto no lado do cliente quanto do servidor para a criação de aplicações web interativas e dinâmicas.'
    },
    {
      icon: React,
      skill: 'React',
      description:
        'React é uma biblioteca JavaScript para construção de interfaces de usuário, que permite criar componentes reutilizáveis para a construção de aplicativos web.'
    },
    {
      icon: NextJs,
      skill: 'Next.js',
      description:
        'Next.js é um framework que permite desenvolver aplicações web com renderização híbrida, com o objetivo de tornar a construção de aplicações web mais eficiente.'
    },
    {
      icon: ReactNative,
      skill: 'React Native',
      description:
        'React Native é um framework para desenvolvimento de aplicativos móveis multiplataforma utilizando React, que permite criar aplicativos nativos para iOS e Android.'
    },
    {
      icon: nodeJs,
      skill: 'Node.Js',
      description:
        'Node.js é um ambiente de execução JavaScript server-side, construído no motor V8 do Google Chrome, utilizado para desenvolver aplicações de rede escaláveis e alto desempenho.'
    },
    {
      icon: Sql,
      skill: 'PostgreSQL',
      description:
        'PostgreSQL é um sistema de gerenciamento de banco de dados relacional e objeto, conhecido por sua robustez, desempenho e conformidade com padrões SQL.'
    }
  ];

  return (
    <section id='skills'>
      <div className='centered'>
        <h1 className='titles' title='Habilidades'>
          Habilidades
          <div className='effect'></div>
        </h1>
        <div className='skillsCards'>
          {mySkills.map(({ icon, skill, description }) => (
            <div className='card' key={skill}>
              <div className='cardContent'>
                <div className='cardContent--Front'>
                  <Image
                    src={icon.src}
                    alt=''
                    width={(icon.width = 64)}
                    height={(icon.height = 64)}
                  />
                </div>
                <div className='cardContent--Back'>
                  <div>
                    <h1>{skill}</h1>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
