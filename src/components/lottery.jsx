import PropTypes from 'prop-types'

// Hoocks
import { useState } from 'react'

// Components
import Title from '../components/title'
import LotteryNum from '../components/lottery-num'
import Button from './button'

export default function Lottery({ id, title, description, date, image, price, numbers }) {

  const [selectedNumbers, setSelectedNumbers] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section className="lottery mb-10 text-center relative" id={id} >
      <Title
        text={title}
      />
      <div className="container mx-auto mt-5 max-w-7xl px-2">
        <p className="date text-xl font-bold">
          {date}
        </p>
        <p className='description my-2'>
          {description}
        </p>
        <p className="price text-2xl font-bold text-yellow">
          {price} MXN / Boleto
        </p>
        <img src={image} alt={`imagen del sorteo ${title}`} className='w-11/12 max-w-7xl mx-auto mt-10 rounded-lg shadow-2xl' />
        <h3 className='text-2xl my-10 uppercase'>Haz click abajo en tu numero de la suerte</h3>
      </div>

      <div className="available-numbers container mx-auto">
        {numbers.map(number => (
          <LotteryNum
            key={number}
            number={number}
            selectedNumbers={selectedNumbers}
            setSelectedNumbers={setSelectedNumbers}
            lotteryTitle={title}
          />
        ))}
      </div>

      <Button
        disabled={selectedNumbers.length == 0}
        onClick={() => setIsFormOpen(true)}
        customClasses="bg-yellow text-green px-5 sm:px-6 md:px-8 lg:px-10 border-yellow mt-5"
      >
        {
          (selectedNumbers.length == 0)
            ?
            "Selecciona un numero"
            :
            (selectedNumbers.length == 1)
              ?
              "Comprar 1 boleto"
              :
              `Comprar ${selectedNumbers.length} boletos`
        }
      </Button>
    </section >
  )
}

Lottery.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  numbers: PropTypes.array.isRequired
}