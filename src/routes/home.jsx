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

        <div className="w-5/6 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 px-5 mt-10 gap-10">

          <Faq
            question="¿Cómo se realizará el sorteo?"
            icon={
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z" />
            }
          >
            <>
              <p>
                Todos nuestros sorteos se realizan en base a la Lotería Nacional para la Asistencia Pública mexicana.
              </p>
              <p>
                El ganador del sorteo será el participante cuyo número de boleto coincida con las últimas cifras del primer premio ganador de la Lotería Nacional (las fechas serán publicadas en nuestra página oficial).
              </p>
            </>
          </Faq>

          <Faq
            question="¿Cómo compro mis boletos?"
            icon={
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371 2.229.765 3.225.54 1.149-.26 1.384-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243 0-1.363 1.039-2.583 2.984-2.85v-1.067h1v1.018c.724.019 1.536.145 2.442.42l-.362 1.647c-.768-.27-1.617-.515-2.443-.465-1.489.087-1.62 1.376-.581 1.916 1.712.805 3.944 1.402 3.944 3.547.002 1.718-1.343 2.632-3 2.864z" />
            }
          >
            <>
              <p>
                Primero deberás apartar tus boletos en nuestra página.
              </p>
              <p>
                Una vez elegidos los boletos, te saldrán nuestros datos bancarios, así como nuestro WhatsApp, donde tendrás que enviar una foto o documento de tu comprobante de pago así como tu nombre y los boletos que apartaste.
              </p>
            </>
          </Faq>

          <Faq
            question="¿Cuánto tiempo tengo para pagar mis boletos?"
            icon={
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-8v-9h2v7h6v2z" />
            }
          >
            <>
              <p>
                Después de 12 horas de apartar tu boleto sin haberlo pagado, automáticamente será cancelado y puesto nuevamente a la venta.
              </p>
            </>
          </Faq>

          <Faq
            question="¿Existe alguna garantía?"
            icon={
              <path d="M14 9v2h-4v-2c0-1.104.897-2 2-2s2 .896 2 2zm10 3c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-8-1h-1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h-1v6h8v-6z" />
            }
          >
            <>
              <p>
                Por supuesto que sí, queremos generar un ambiente muy confiable con nuestra comunidad.
              </p>
              <p>
                Todo el sorteo será transmitido en vivo, los ganadores serán publicados en nuestras redes sociales y jamás perderemos ni un minuto de contacto contigo.
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

          <div className="container text-xl mx-auto px-5 text-center max-w-5xl">
            <p>
              Somos una comunidad de amigos originarios de la ciudad de Aguascalientes.
              <br />
              Nos dedicamos a hacer sorteos de nuestra comunidad para todo México y buscamos crear un ambiente confiable y divertido para las personas interesadas en participar sorteos.
            </p>
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