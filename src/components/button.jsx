import PropTypes from 'prop-types'

export default function Button({children, disabled, customClasses}) {
  return (
    <button
      className={`text-xl font-bold py-1 sm:py-2 shadow-lg duration-300 [&:not([disabled])]:hover:-translate-y-1 rounded-md ${customClasses}`}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.5 : 1
      }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  customClasses: PropTypes.string.isRequired
}