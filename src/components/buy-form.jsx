import PropTypes from "prop-types"

// Hooks
import { useState } from "react"

// Components
import Input from "./input"
import Button from "./button"

export default function BuyForm({isFormOpen, setIsFormOpen}) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <form
      onSubmit={() => { }}
      className="fixed top-0 left-0 z-20 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 duration-200"
      style={{
        zIndex: isFormOpen ? "20" : "-10",
        opacity: isFormOpen ? 1 : 0,
      }}
    >
      <div className="flex items-center justify-center flex-col shadow-xl bg-yellow-light text-green w-96 py-10 rounded-lg">

        <h2 className="text-2xl mb-2">Aparta tus boletos</h2>

        <Input
          label="Nombre"
          inputType="text"
          id="name"
          placeholder="Juan Pérez"
        />

        <Input
          label="Correo"
          inputType="email"
          id="email"
          placeholder="juanperez@gmail.com"
        />

        <div className="buttons w-5/6 mt-5 flex items-center justify-between">
          <Button
            disabled = {false}
            onClick={() => {}}
            customClasses="text-yellow-light bg-green border-green w-6/12"
          >
            Apartar
          </Button>
          <Button
            disabled = {false}
            onClick={() => {setIsFormOpen(false)}}
            customClasses="opacity-70 text-green bg-yellow border-yellow w-5/12"
          >
            Cancelar
          </Button>
        </div>
      </div>
    </form>
  )
}

BuyForm.propTypes = {
  isFormOpen: PropTypes.bool.isRequired,
  setIsFormOpen: PropTypes.func.isRequired,
}