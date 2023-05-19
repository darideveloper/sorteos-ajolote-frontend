import PropTypes from "prop-types"

// Hooks
import { useState } from "react"

// Components
import Input from "./input"
import Button from "./button"
import Loading from "./loading"

// Api
import { buyTickets } from "../api/lottery"

export default function BuyForm({ isFormOpen, setIsFormOpen, selectedNumbers, lotteryTitle, setIsSuccess, name, setName }) {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState({ text: selectedNumbers.join(" - "), type: "message" })
  const [emailIsInvalid, setEmailIsInvalid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [notAvailableNumbers, setNotAvailableNumbers] = useState([])

  function submit(e) {

    // Show loading spinner
    setIsLoading(true)

    // Submit data to api
    buyTickets(name, email, selectedNumbers, lotteryTitle).then(res => {

      const messages = {
        "invalid email": "Correo inválido",
        "lottery is closed": "Este sorteo ya está cerrado. Intenta con otro mas tarde.",
        "numbers not available": "Alguno de los números que elegiste ya no está disponible. Actualiza la página e intenta con otros. Numeros no disponibles: ",
      }

      // Hide loading spinner
      setIsLoading(false)

      if (res.status == "success") {
        // Close forms
        cancel()

        // Move tu success state
        setIsSuccess (true)
        
      } else {
        // Render error
        if (Object.keys(messages).includes(res.message)) {
          setMessage({
            text: messages[res.message],
            type: "error"
          })

          if (res.message == "invalid email") {
            setEmailIsInvalid(true)
          } else {
            setEmailIsInvalid(false)
          }

          if (res.message == "numbers not available") {
            setNotAvailableNumbers(res.data.numbers)
          } else {
            setNotAvailableNumbers([])
          }

        } else {
          setMessage({
            text: "Error inesperado. Intenta de nuevo mas tarde.",
            type: "error"
          })
        }
      }
    })
  }

  function cancel() {
    setIsFormOpen(false)
    setMessage({ text: selectedNumbers.join(" - "), type: "message" })
    setEmailIsInvalid(false)
    setNotAvailableNumbers([])
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault() }}
      className="flex items-center justify-center flex-col w-full"
    >
      {
        isLoading
          ?
          <Loading />
          :
          <>
            <h2 className="text-2xl mb-2">Aparta tus boletos</h2>
            <p className={`message ${message.type == 'error' ? 'text-red-500' : 'text-green'} w-5/6`}>{message.text}</p>
            {
              notAvailableNumbers.length > 0
              &&
              <p className="numbers text-md text-red-500 w-5/6 flex flex-wrap mt-5 justify-center">
                {
                  notAvailableNumbers.map((number, index) => {
                    return (
                      <span key={index} className="px-1">{number}</span>
                    )
                  })
                }
              </p>
            }

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
    </form>
  )
}

BuyForm.propTypes = {
  isFormOpen: PropTypes.bool.isRequired,
  setIsFormOpen: PropTypes.func.isRequired,
  selectedNumbers: PropTypes.array.isRequired,
  lotteryTitle: PropTypes.string.isRequired,
  setIsSuccess: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
}