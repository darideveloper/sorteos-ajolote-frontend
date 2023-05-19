// Hooks
import { useState } from "react"

// Components
import Input from "./input"
import Button from "./button"

export default function BuyForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <form
      onSubmit={() => { }}
      className="fixed top-0 left-0 z-20 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
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
            onClick={() => {}}
            customClasses="opacity-70 text-green bg-yellow border-yellow w-5/12"
          >
            Cancelar
          </Button>
        </div>
        {/* <Button
          colorClasses='text-green bg-yellow hover:text-yellow-light hover:bg-green'
        >
          Apartar
        </Button>

        <Button
          colorClasses='text-green bg-yellow hover:text-yellow-light hover:bg-pink-light'
        >
          Cancelar
        </Button> */}
      </div>

    </form>
  )
}