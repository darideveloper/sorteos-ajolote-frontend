import PropTypes from 'prop-types'

export default function BuyButton({selectedNumbersLottery}) {
  return (
    <button
      className='mt-5 rounded-xl bg-yellow text-lg sm:text-xl md:text-2xl font-bold text-green px-5 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-2 md:py-2 lg:py-3 uppercase shadow-lg border-4 border-yellow duration-300 [&:not([disabled])]:hover:bg-transparent [&:not([disabled])]:hover:text-yellow'
      disabled={selectedNumbersLottery.length == 0}
      style={{
        opacity: selectedNumbersLottery.length == 0 ? 0.5 : 1
      }}
    >
      {
        (selectedNumbersLottery.length == 0)
          ?
          "Selecciona un numero"
          :
          (selectedNumbersLottery.length == 1)
            ?
            "Comprar 1 boleto"
            :
            `Comprar ${selectedNumbersLottery.length} boletos`

      }
    </button>
  )
}

BuyButton.propTypes = {
  selectedNumbersLottery: PropTypes.array
}