import PropTypes from 'prop-types'

export default function Titile({ text, isMainTitle = false }) {

  const classes = "text-lg text-center font-bold"

  return (
    <div className="title-wrapper w-full bg-pink py-5 sticky">
      {
        isMainTitle
          ?
          <h1 className={`${classes} text-xl sm:text-2xl md:text-3xl `}>{text}</h1>
          :
          <h2 className={`${classes} text-lg sm:text-xl md:text-2xl `}>{text}</h2>
      }
    </div>
  )
}

Titile.propTypes = {
  text: PropTypes.string.isRequired,
  isMainTitle: PropTypes.bool
}