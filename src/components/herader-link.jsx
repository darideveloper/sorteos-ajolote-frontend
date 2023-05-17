import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default function HeaderLink({ text, to, isLink=false }) {

  const styles = 'py-3 block sm:px-5 hover:text-yellow duration-300'

  return (
    isLink 
    ?
    <Link to={to} className={styles}>{text}</Link>
    : 
    <a href={to} className={styles}>{text}</a>
  )
}

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
}