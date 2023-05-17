// Routing
import { Outlet } from "react-router-dom"

// Hooks
import { useState, useEffect } from "react"

// Components
import HeaderLink from "../components/herader-link"
import HeaderButton from "../components/header-button"


export default function Root() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {

  }, [isMenuOpen])

  return (
    <>
      <header>
        <div className="container mx-auto flex items-center justify-between relative">
          <img src="./logo.png" alt="logo de sorteos ajolote" className="logo w-28 -mb-4 rounded-full" />
          <nav
            className="fixed sm:static top-0 w-72 sm:w-auto h-screen sm:h-auto bg-green z-10 sm:z-0 shadow-2xl sm:shadow-none duration-300"
            style={{ right: isMenuOpen ? '0' : "-250px" }}
          >
            <ul className="flex items-center gap-5 sm:gap-0 p-5 sm:p-0 pt-28 sm:pt-0 text-2xl text-center flex-col sm:flex-row">
              <li>
                <HeaderLink
                  to="#faqs"
                  text="Preguntas frecuentes"
                />
              </li>
              <li>
                <HeaderLink
                  to="#about-us"
                  text="Acerca de nosotros"
                />
              </li>
              <li>
                <HeaderLink
                  to="#contact"
                  text="Contacto"
                />
              </li>
              <li>
                <HeaderLink
                  to="buy"
                  text="Buy"
                  isLink={true}
                />
              </li>
            </ul>
          </nav>
          <HeaderButton
            active={isMenuOpen}
            setActive={setIsMenuOpen}
          >
          </HeaderButton>

        </div>
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