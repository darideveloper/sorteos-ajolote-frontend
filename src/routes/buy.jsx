import { useState, useEffect } from 'react'
import { getLoterry } from "../api/lottery"

export default function Buy() {

  const [data, setData] = useState({})

  // Load data when loads
  useEffect(() => {

    getLoterry().then(data => {
      setData(data)
    })

  }, [])

  // Render when data changes
  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    (
      data
      ?
        <>
          <h1 className='text-4xl text-center mt-10'>Comprar Boletos</h1>
        </>
        :
        <p>no data</p>
    )
  )
}