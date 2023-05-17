import PropTypes from 'prop-types'

export default function Paralax({ children, imageUrl, extraClasses = "", maxHeight }) {

  return (
    <div className={`w-full bg-fixed bg-center bg-cover ${extraClasses}`} style={{ maxHeight: `${maxHeight}px`, backgroundImage: `url('${imageUrl}')` }}>
      {children}
    </div>
  )
}

Paralax.propTypes = {
  children: PropTypes.element.isRequired,
  imageUrl: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
  maxHeight: PropTypes.number.isRequired
}