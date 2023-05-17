import PropTypes from 'prop-types'

export default function ContactIcon({ link, name, children, target = "_blank" }) {
  return (
    <a target={target} title={name} href={link}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-yellow w-14 mx-auto hover:opacity-50 duration-300">
        {children}
      </svg>
    </a>
  )
}

ContactIcon.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.string
}