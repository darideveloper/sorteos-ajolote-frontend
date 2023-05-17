import { useState, useEffect } from 'react'
import { getLoterry } from "../api/lottery"

export default function Buy() {

  const [data, setData] = useState([])

  // Load data when loads
  useEffect(() => {

    getLoterry().then(data => {
      setData(data)
    })

  }, [])

  // Render when data changes
  useEffect(() => {}, [data])

  return (
    (
      data.length > 0
      ?
        <>
          {/* Render lottery */}
          <h1 className='text-4xl text-center mt-10'>Comprar Boletos</h1>
          {data.map (({title, description, date, image, price, numbers}) => (
            <section className="lottery" key={title}>
              <p>{data.title}</p>
            </section>
          ))}
        </>
        :
        <section className="no-data text-center container h-screen flex items-center justify-center flex-col">
          <img src="./not-found.svg" alt="ilustración sin sorteos encontrados" className='opacity-50'/>
          <h1 className='text-4xl my-5'>No hay sorteos disponibles en este momento</h1>
          <p className='text-2xl'>Intenta mas tarde</p>
        </section>
    )
  )
}