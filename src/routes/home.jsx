// Components
import { Link } from "react-router-dom"
import Paralax from "../components/paralax"
import Title from "../components/title"
import Faq from "../components/faq"
import ContactIcon from "../components/contact-icon"

export default function Home() {

  return (
    <>
      <section className="hero">
        <Title
          text="Sorteos Ajolote"
          isMainTitle={true}
        />
        <Paralax
          extraClasses="flex items-center justify-center relative h-52 sm:h-80 md:h-96 lg:h-screen"
          imageUrl="./hero.jpg"
          maxHeight={400}
        >
          <>
            <Link to={"buy"} className="rounded-xl bg-yellow text-xl sm:text-2xl md:text-3xl font-bold text-green px-5 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-2 md:py-2 lg:py-3 uppercase shadow-lg border-4 border-yellow duration-300 hover:bg-transparent hover:text-yellow">Comprar boletos</Link>
          </>
        </Paralax>
      </section>

      <section className="faqs" id="faqs">
        <Title
          text="Preguntas frecuentes"
        />

        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 mx-0 sm:mx-auto mt-10 gap-10">
          <Faq
            question="¿Pregunta 1?"
            icon={
              <path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" />
            }
          >
            <>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
              </p>
            </>
          </Faq>

          <Faq
            question="¿Pregunta 1?"
            icon={
              <path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" />
            }
          >
            <>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
              </p>
            </>
          </Faq>

          <Faq
            question="¿Pregunta 1?"
            icon={
              <path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" />
            }
          >
            <>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
              </p>
            </>
          </Faq>

          <Faq
            question="¿Pregunta 1?"
            icon={
              <path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" />
            }
          >
            <>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
              </p>
            </>
          </Faq>

          <Faq
            question="¿Pregunta 1?"
            icon={
              <path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" />
            }
          >
            <>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
              </p>
            </>
          </Faq>

          <Faq
            question="¿Pregunta 1?"
            icon={
              <path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" />
            }
          >
            <>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora unde ipsum perferendis quasi nihil non exercitationem fugit quaerat? Quidem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo ab laboriosam architecto doloremque error!
              </p>
            </>
          </Faq>
        </div>
      </section>

      <section className="about-us mt-20" id="about-us">

        <Title
          text="Acerca de nosotros"
        />
        <Paralax
          extraClasses="flex items-center justify-center relative flex-col h-96 lg:h-screen"
          imageUrl="./hero.jpg"
          maxHeight={500}
        >

          <div className="container text-xl mx-auto px-5 text-center">
            <p>Somos la manera más segura y divertida de participar en sorteos/rifas en México, todos nuestros sorteos se realizan en base a la Lotería Nacional para la Asistencia Pública mexicana.</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis et iusto officiis! Adipisci fuga cupiditate praesentium quaerat optio eligendi iure id magni deleniti, commodi ipsum aspernatur nihil ad delectus recusandae!</p>
          </div>
        </Paralax>
      </section>

      <section className="contact" id="contact">
        <Title
          text="Contacto"
        />

        <div className="contacts container mx-auto grid grid-cols-4 gap-2 my-10 max-w-sm">

          <ContactIcon
            link="https://www.facebook.com/profile.php?id=100092314046742"
            name="facebook"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
          </ContactIcon>

          <ContactIcon
            link="https://www.instagram.com/ajolotesorteos/?hl=es-la"
            name="instagram"
          >
            <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
          </ContactIcon>

          <ContactIcon
            link="https://api.whatsapp.com/send?phone=5214491448460"
            name="whatsapp"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
          </ContactIcon>

          <ContactIcon
            link="mailto:mexirifaags@gmail.com"
            name="email"
          >
            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
          </ContactIcon>

        </div>
      </section>

    </>
  )
}