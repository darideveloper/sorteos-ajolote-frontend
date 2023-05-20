import PropTypes from 'prop-types'

// Componentns
import Button from './button'

export default function Success ({setIsSuccess, name, total}) {

  const payData = [
    {name: "Banco:", value: "BBVA"},
    {name: "Número:", value: "4152 3140 8482 8287"},
    {name: "Titular:", value: "David Faz"},
    {name: "Concepto de pago:", value: name},
    {name: "Cantidad:", value: total + " MXN"},
    {name: "Mandar tu comprobante de pago a:", value: (
      <a 
        href={`https://api.whatsapp.com/send?phone=5214491448460&text=Este%20es%20mi%20comprobante%20de%20pago%2C%20soy%20${name}"`}
        className='underline hover:opacity-80'
        target='_blank'
      >
        449 144 8460
      </a>
    ) }
  ]

  return (
    <>
      <h2 className='text-xl'>Boletos apartados!</h2>
      <p className='mb-5'>Información de pago</p>

      {payData.map((item, index) => (
        <p key={index}>
          {item.name}
          <span className='font-bold ml-2'>
            {item.value}
          </span>
        </p>
      ))}

      <p className='text-xs mt-1'>Cuentas con un máximo de 12 hrs para realizar tu pago</p>

      <Button 
        onClick={() => {
          setIsSuccess(false)
          window.location.reload()
        }}
        customClasses='bg-yellow text-green px-5 mt-5'
      >
        Cerrar
      </Button>
    </>
  )
}

Success.propTypes = {
  setIsSuccess: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}