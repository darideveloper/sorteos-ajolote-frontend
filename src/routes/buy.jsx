// Hooks
import { useState, useEffect } from 'react'

// Api
import { getLoterry } from '../api/lottery'

// Components
import Lottery from '../components/lottery'
import Title from '../components/title'
import Paralax from '../components/paralax'
import Loading from '../components/loading'

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
      {
        dataLoaded
          ?
          data.length > 0
            ?
            // Render lottery
            <>
              <Title
                text="Comprar Boletos"
                isMainTitle={true}
              />
              <Paralax
                extraClasses="flex items-center justify-center relative h-52 sm:h-80 md:h-96 lg:h-screen"
                imageUrl="./hero.jpg"
                maxHeight={400}
              />
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
          <Loading />
      }
    </>
  )
}