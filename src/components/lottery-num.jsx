import PropTypes from 'prop-types'
import { useState } from 'react'

export default function LotteryNum({ number, selectedNumbers, setSelectedNumbers }) {

  const [isActive, setIsActive] = useState(false)  

  return (
    <button
      className='number px-3 m-2 border-2 hover:bg-pink'
      key={number}
      style={{ backgroundColor: isActive ? '#e982b599' : 'transparent' }}
      onClick={() => {
        if (isActive) {
          // Remove number from selectedNumbers
          setIsActive(false)
          setSelectedNumbers(selectedNumbers.filter(n => n !== number))
        } else {
          // Add number to selectedNumbers
          setIsActive(true)
          setSelectedNumbers([...selectedNumbers, number])
        }
      }}
    >
      {number}
    </button>
  )
}

LotteryNum.propTypes = {
  number: PropTypes.number.isRequired,
  selectedNumbers: PropTypes.array.isRequired,
  setSelectedNumbers: PropTypes.func.isRequired,
  lotteryTitle: PropTypes.string.isRequired
}