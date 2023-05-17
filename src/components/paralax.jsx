import PropTypes from 'prop-types'

export default function Paralax({ children, imageUrl, extraClasses = "", maxHeight }) {

  return (
    <div className={`w-full relative ${extraClasses}`} style={{ maxHeight: `${maxHeight}px` }}>
      <div className="absolute bg-fixed bg-center bg-cover top-0 left-0 w-full h-full opacity-30 -z-10" style={{ backgroundImage: `url('${imageUrl}')` }}/>
      {children}
    </div>
  )
}

Paralax.propTypes = {
  children: PropTypes.element,
  imageUrl: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
  maxHeight: PropTypes.number.isRequired
}