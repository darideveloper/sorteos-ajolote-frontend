import { Outlet, Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <section className="hero w-full relative flex items-center justify-center h-52 sm:h-80 md:h-96 lg:h-screen overflow-hidden bg-fixed bg-center bg-cover bg-[url('./hero.png')]" style={{maxHeight: "400px"}}>
        <Link to={"buy"} className="rounded-xl bg-yellow text-2xl sm:text-3xl md:text-4xl font-bold text-green px-5 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-2 md:py-2 lg:py-3 uppercase shadow-lg border-4 border-yellow duration-300 hover:bg-transparent hover:text-yellow">Comprar boletos</Link>
      </section>
      <p style={{height: "10000px"}}></p>
    </>
  )
}