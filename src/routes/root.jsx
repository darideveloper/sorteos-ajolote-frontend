import { Outlet, Link } from "react-router-dom"

export default function Root() {
  return (
    <>
      <header>
        <img src="./logo.png" alt="logo de sorteos ajolote" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="#faqs">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="about-us">Acerca de nosotros</a>
            </li>
            <li>
              <a href="contact">Contacto</a>
            </li>
            <li>
              <Link to={"buy"}>Buy</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        footer
      </footer>
    </>
  )
} 