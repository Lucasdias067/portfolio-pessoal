import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1>404 - Page Not Found</h1>
      <p>Volte para a página inicial: </p>
      <Link href='https://portfolio-lucasdias.netlify.app/' style={{ fontSize: '1.5rem', textDecoration: 'none' }} title="Clique aqui">Portfolio</Link>
    </div>
  );
}