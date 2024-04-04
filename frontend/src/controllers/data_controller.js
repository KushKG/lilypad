const apiUrl = 'http://localhost:5000'; // Assuming your Flask app is running locally on port 5000

export async function fetchPlants(query, filters) {
  let url = `${apiUrl}/search?q=${query}`
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("Plants fetched")
    return data; // Return the fetched data
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

export async function getPlantDetailsByName(query) {
  let url = `${apiUrl}/plant?q=${query}` // Change search to correct route

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("Plant Details Fetched")
    return data; // Return the fetched data
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
}