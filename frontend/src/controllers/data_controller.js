const apiUrl = 'https://f766-2600-1700-22-4000-1cce-a568-75b3-2090.ngrok-free.app'; 

export async function fetchPlants(query, filters, region) {
  let url = `${apiUrl}/search?q=${query}&filters=${JSON.stringify(filters)}&region=5`
  const response = await fetch(url)
  json = await response.json()
  return json.results
}

export async function getPlantDetailsByName(query, region) {
  let url = `${apiUrl}/plant?name=${query}&region=5` 
  const response = await fetch(url)
  json = await response.json()
  return json.results
}