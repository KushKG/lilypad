const apiUrl = 'http://127.0.0.1:5000'; 

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