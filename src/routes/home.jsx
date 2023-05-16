// Components
import { Link } from "react-router-dom"
import Paralax from "../components/paralax"
import Title from "../components/title"
import Faq from "../components/faq"

export default function Home() {

  return (
    <>
      <section className="hero">
        <Paralax
          extraClasses="flex items-center justify-center relative h-52 sm:h-80 md:h-96 lg:h-screen"
          imageUrl="./hero.png"
          maxHeight="400"
        >

          <h1 className="absolute -top-3 sm:-top-4 md:-top-5 lg:-top-5 left-0 w-full text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Sorteos Ajolote</h1>
          <Link to={"buy"} className="rounded-xl bg-yellow text-2xl sm:text-3xl md:text-4xl font-bold text-green px-5 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-2 md:py-2 lg:py-3 uppercase shadow-lg border-4 border-yellow duration-300 hover:bg-transparent hover:text-yellow">Comprar boletos</Link>

        </Paralax>
      </section>

      <section className="faqs" id="faqs">
        <Title
          text="Preguntas frecuentes"
        />

        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 mx-0 sm:mx-auto mt-10 gap-10">
          <Faq
            question="¿Pregunta 1?"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
            </p>
          </Faq>

          <Faq
            question="¿Pregunta 2?"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
            </p>
          </Faq>

          <Faq
            question="¿Pregunta 3?"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
            </p>
          </Faq>

          <Faq
            question="¿Pregunta 4?"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
            </p>
          </Faq>

          <Faq
            question="¿Pregunta 5?"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
            </p>
          </Faq>

          <Faq
            question="¿Pregunta 6?"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
            </p>
          </Faq>


        </div>
      </section>

      <section className="about-us mt-20" id="about-us">

        <Title
          text="ACERCA DE NOSOTROS"
        />
        <Paralax
          extraClasses="flex items-center justify-center relative flex-col h-96 lg:h-screen"
          imageUrl="./hero.png"
          maxHeight="400"
        >

          <div className="container text-2xl mx-auto px-5 text-center">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At odit mollitia dolor asperiores totam exercitationem officiis iure, ipsam magnam quos.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor omnis esse, voluptatibus eos magni optio cupiditate. Consequuntur, officia exercitationem numquam dignissimos.</p>
          </div>
        </Paralax>
      </section>

      <section className="" id="about-us">

      </section>

    </>
  )
}