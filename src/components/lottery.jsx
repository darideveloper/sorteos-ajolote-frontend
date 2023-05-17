import { useState, useEffect } from 'react'
import Title from '../components/title'
import LotteryNum from '../components/lottery-num'
import BuyButton from '../components/buy-button'

export default function Lottery({ title, description, date, image, price, numbers }) {

  const [selectedNumbers, setSelectedNumbers] = useState([])

  return (
    <section className="lottery mt-10 text-center relative" key={title} >
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

      <BuyButton
        selectedNumbersLottery={selectedNumbers}
      />
    </section >
  )
}