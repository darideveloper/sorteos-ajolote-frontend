// Routing
import { Outlet, useNavigation } from "react-router-dom"

// Hooks
import { useState, useEffect } from "react"

// Components
import HeaderLink from "../components/herader-link"
import HeaderButton from "../components/header-button"


export default function Root() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Move to sections
  useEffect(() => {

    // Get id from url
    const id = window.location.hash
    if (id) {
      setTimeout(() => {
        console.log (id)
        const section = document.querySelector(id)
        section.scrollIntoView()
      }, 1000)
    }
  }, [])

  const navigation = useNavigation()

  return (
    <>
      <header>
        <div className="container mx-auto flex items-center justify-end relative h-20">
          <img src="./logo.png" alt="logo de sorteos ajolote" className="absolute top-0 left-0 z-10 logo w-20 rounded-full" />
          <nav
            className="fixed md:static top-0 w-72 md:w-auto h-screen md:h-auto bg-green z-10 md:z-0 shadow-2xl md:shadow-none duration-300"
            style={{ right: isMenuOpen ? '0' : "-400px" }}
          >
            <ul className="flex items-center gap-0 pt-20 md:pt-0 text-lg text-center flex-col md:flex-row">
              <li>
                <HeaderLink
                  to="/#faqs"
                  text="Preguntas frecuentes"
                />
              </li>
              <li>
                <HeaderLink
                  to="/#about-us"
                  text="Acerca de nosotros"
                />
              </li>
              <li>
                <HeaderLink
                  to="/#contact"
                  text="Contacto"
                />
              </li>
              <li>
                <HeaderLink
                  to="buy"
                  text="Comprar"
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
        {
          navigation.state === "loading"
            ?
            <Loading />
            :
            <Outlet />
        }
      </main>
      <footer>
        <small className="text-md text-center block">
          &copy 2023 Sorteos Ajolote, powered by <a href="https://www.darideveloper.com" target="_blank">Dari Developer</a>
        </small>
      </footer>
    </>
  )
}