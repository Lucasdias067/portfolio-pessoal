import Link from 'next/link';

export default function Custom404() {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        height: '100vh',
        boxSizing: 'border-box',
        background: '#fafafa'
      }}
    >
      <h1 style={{ margin: '0px' }}>404 - Page Not Found</h1>
      <p>Volte para a página inicial: </p>
      <Link
        href='https://portfolio-lucasdias.netlify.app/'
        style={{
          fontSize: '2rem',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
        title='Clique aqui'
      >
        Portfolio
      </Link>
    </div>
  );
}
