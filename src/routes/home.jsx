// Components
import { Link } from "react-router-dom"
import SectionParalax from "../components/section-paralax"

export default function Home() {

  return (
    <>
      <SectionParalax
        extraClasses="hero flex items-center justify-center"
        imageUrl="./hero.png">

        <Link to={"buy"} className="rounded-xl bg-yellow text-2xl sm:text-3xl md:text-4xl font-bold text-green px-5 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-2 md:py-2 lg:py-3 uppercase shadow-lg border-4 border-yellow duration-300 hover:bg-transparent hover:text-yellow">Comprar boletos</Link>

      </SectionParalax>
      <p style={{ height: "10000px" }}></p>
    </>
  )
}