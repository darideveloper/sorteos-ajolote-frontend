// Hooks
import { useState, useEffect } from 'react'

// Api
import { getLoterry } from '../api/lottery'

// Components
import Lottery from '../components/lottery'
import Title from '../components/title'

export default function Buy() {

  const [data, setData] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  // Load data when loads
  useEffect(() => {

    getLoterry().then(data => {
      setData(data)
      setDataLoaded(true)
    })

  }, [])

  return (
    <>
      <Title
        text="Comprar Boletos"
        isMainTitle={true}
      />
      {
        dataLoaded
          ?
          data.length > 0
            ?
            // Render lottery
            <>
              {data.map((data) => (
                <Lottery
                  key={data.title}
                  title={data.title}
                  description={data.description}
                  date={data.date}
                  image={data.image}
                  price={data.price}
                  numbers={data.numbers}
                />
              ))}
            </>
            :
            // Render error page
            <section className="no-data container text-center h-screen flex items-center justify-center flex-col mx-auto">
              <img src="./not-found.svg" alt="ilustración sin sorteos encontrados" className='opacity-50 max-w-md' />
              <h1 className='text-3xl my-5'>No hay sorteos disponibles en este momento</h1>
              <p className='text-xl'>Intenta mas tarde</p>
            </section>
          :
          // Render loading page
          <div className="spinner flex items-center justify-center h-screen">
            <img src="./spinner.gif" alt="spinner gif" />
          </div>
      }
    </>
  )
}