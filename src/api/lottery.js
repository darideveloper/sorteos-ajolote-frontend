const endpoint = import.meta.env.VITE_API

export async function getLoterries() {

  const response = await fetch(`${endpoint}/get-lotteries/`, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })

  let data = await response.json()

  return data
}