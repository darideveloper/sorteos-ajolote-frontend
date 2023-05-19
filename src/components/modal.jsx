import PropTypes from 'prop-types'

export default function Model ({isVisible, children}) {
  return (
    <div
      className='modal-wrapper fixed top-0 left-0 z-20 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 duration-200'
      style={{
        zIndex: isVisible ? "20" : "-10",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="modal shadow-xl bg-yellow-light text-green w-96 py-10 rounded-lg">
        {children}
      </div>
    </div>
  )
}

Model.propTypes = {
  isVisible: PropTypes.bool.isRequired,
}