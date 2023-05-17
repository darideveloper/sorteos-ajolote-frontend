import PropTypes from 'prop-types'

export default function ContactIcon({ link, name, children }) {
  return (
    <a target="_blank" title={name} href={link}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-yellow w-20 mx-auto">
        {children}
      </svg>
    </a>
  )
}

ContactIcon.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}