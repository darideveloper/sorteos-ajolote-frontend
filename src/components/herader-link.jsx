import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default function HeaderLink({ text, to, isLink=false }) {
  return (
    isLink 
    ?
    <Link to={to} className='py-3 block sm:px-5'>{text}</Link>
    : 
    <a href={to} className='py-3 block sm:px-5'>{text}</a>
  )
}

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
}