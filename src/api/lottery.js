const endpoint = import.meta.env.VITE_API

export async function getLoterries() {

  const response = await fetch(`${endpoint}/get-lotteries/`, {
    method: 'GET'
  })

  const data = await response.json()

  return data
}
export async function buyTickets(user_name, user_email, tickets, lottery) {

  const response = await fetch(`${endpoint}/save-tickets/`, {
    method: 'POST',
    body: JSON.stringify({
      user_name,
      user_email,
      tickets,
      lottery,
    }),
  })

  const data = await response.json()

  return data
}