const apiUrl = 'http://127.0.0.1:5000'; // Assuming your Flask app is running locally on port 5000

export async function fetchPlants(query, filters) {
  let url = `${apiUrl}/search?q=${query}&filters={}&region=0`
  const response = await fetch(url)
  json = await response.json()
  return json.results
}

export async function getPlantDetailsByName(query) {
  let url = `${apiUrl}/plant?name=${query}` 
  const response = await fetch(url)
  json = await response.json()
  return json.results
}