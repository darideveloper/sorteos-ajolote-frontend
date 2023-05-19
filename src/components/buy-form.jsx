import PropTypes from "prop-types"

// Hooks
import { useState } from "react"

// Components
import Input from "./input"
import Button from "./button"
import Loading from "./loading"

// Api
import { buyTickets } from "../api/lottery"

export default function BuyForm({ isFormOpen, setIsFormOpen, selectedNumbers, lotteryTitle }) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [emailIsInvalid, setEmailIsInvalid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [notAvailableNumbers, setNotAvailableNumbers] = useState([])

  function submit(e) {

    // Show loading spinner
    setIsLoading(true)

    // Submit data to api
    buyTickets (name, email, selectedNumbers, lotteryTitle).then (res => {

      const messages = {
        "invalid email": "Correo inválido",
        "lottery is closed": "Este sorteo ya está cerrado. Intenta con otro mas tarde.",
        "numbers not available": "Alguno de los números que elegiste ya no está disponible. Actualiza la página e intenta con otros. Numeros no disponibles: ",
      }
      
      // Hide loading spinner
      setIsLoading (false)
      console.log (res)
      
      if (res.status == "success") {
        console.log ("success")
      } else {
        // Render error
        if (Object.keys(messages).includes (res.message)) {
          setError (messages[res.message])

          if (res.message == "invalid email") {
            setEmailIsInvalid (true)
          } else {
            setEmailIsInvalid (false)
          }

          if (res.message == "numbers not available") {
            setNotAvailableNumbers (res.data.numbers)
          } else {
            setNotAvailableNumbers ([])
          }

        } else {
          setError ("Error inesperado. Intenta de nuevo mas tarde.")
        }
      }
    })
  }

  function cancel () {
    setIsFormOpen (false)
    setIsSuccess (false)
    setError ("")
    setNotAvailableNumbers ([])
  }

  return (
    <form
      onSubmit={() => { }}
      className={`fixed top-0 left-0 z-20 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 duration-200`}
      style={{
        zIndex: isFormOpen ? "20" : "-10",
        opacity: isFormOpen ? 1 : 0,
      }}
    >
      <div className="flex items-center justify-center flex-col shadow-xl bg-yellow-light text-green w-96 py-10 rounded-lg">
        {
          isLoading
            ?
            <Loading />
            :
            <>
              <h2 className="text-2xl mb-2">Aparta tus boletos</h2>
              <p className="message text-red-500 w-5/6">{error}</p>
              <p className="numbers text-md text-red-500 w-5/6 flex flex-wrap mt-5 justify-center">
                {
                  notAvailableNumbers.map ((number, index) => {
                    return (
                      <span key={index} className="px-1">{number}</span>
                    )
                  })
                }
              </p>

              <Input
                label="Nombre"
                inputType="text"
                id="name"
                placeholder="Juan Pérez"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />

              <Input
                label="Correo"
                inputType="email"
                id="email"
                placeholder="juanperez@gmail.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                isInvalid={emailIsInvalid}
              />

              <div className="buttons w-5/6 mt-5 flex items-center justify-between">
                <Button
                  disabled={name === "" || email === "" ? true : false}
                  onClick={(e) => { submit() }}
                  customClasses="text-yellow-light bg-green border-green w-6/12"
                >
                  Apartar
                </Button>
                <Button
                  disabled={false}
                  onClick={() => { cancel() }}
                  customClasses="opacity-70 text-green bg-yellow border-yellow w-5/12"
                >
                  Cancelar
                </Button>
              </div>
            </>
        }
      </div>
    </form>
  )
}

BuyForm.propTypes = {
  isFormOpen: PropTypes.bool.isRequired,
  setIsFormOpen: PropTypes.func.isRequired,
  selectedNumbers: PropTypes.array.isRequired,
}