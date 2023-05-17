import PropTypes from 'prop-types'

export default function Faq({ question, icon, children }) {
  return (
    <article className="faq block text-center">
      <header>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 mx-auto my-5 fill-pink">
          {icon}
        </svg>
        <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl text-center my-2 text-yellow">{question}</h3>
      </header>
      <div className="text">
        {children}
      </div>
    </article>
  )
}

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired
}