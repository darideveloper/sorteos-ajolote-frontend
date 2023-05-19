const endpoint = "http://localhost:8000/lottery"

export async function getLoterries() {

  const response = await fetch(`${endpoint}/get-lotteries/`, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })

  let data = await response.json()

  return data
}