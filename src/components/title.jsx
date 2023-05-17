import PropTypes from 'prop-types'

export default function Titile({ text }) {
  return (
    <div className="title-wrapper w-full bg-pink py-5 sticky">
      <h2 className="text-lg sm:text-xl md:text-2xl text-center font-bold">{text}</h2>
    </div>
  )
}

Titile.propTypes = {
  text: PropTypes.string.isRequired
}