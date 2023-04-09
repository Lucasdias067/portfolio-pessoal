import Header from "./header/page"
import Footer from "./footer/page"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "./global.css"

config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""} />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap" rel="stylesheet" />
      </head>
      <body cz-shortcut-listen="true" >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
