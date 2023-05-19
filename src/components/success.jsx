import PropTypes from 'prop-types'

// Componentns
import Button from './button'

export default function Success ({setIsSuccess, name}) {

  const payData = [
    {name: "Banco", value: "BBVA"},
    {name: "Número", value: "4152 3140 8482 8287"},
    {name: "Titular", value: "David Faz"},
    {name: "Concepto de pago", value: name},
  ]

  return (
    <>
      <h2 className='text-xl'>Boletos apartados!</h2>
      <p className='mb-5'>Información de pago</p>

      {payData.map((item, index) => (
        <p key={index}>
          {item.name}
          <span className='font-bold ml-1'>
            {item.value}
          </span>
        </p>
      ))}

      <p className='text-xs mt-1'>Cuentas con un máximo de 8 hrs para realizar tu pago</p>

      <Button 
        onClick={() => {
          setIsSuccess(false)
          window.location.reload()
        }}
        customClasses='bg-yellow text-green px-5 mt-5'
      >
        Continuar
      </Button>
    </>
  )
}

Success.propTypes = {
  setIsSuccess: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}