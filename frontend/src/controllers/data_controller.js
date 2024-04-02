const apiKey = '8OS2mP4_wX4djoMj3VzXcVo4TXSb-2Asc9HhxOxq6DY';
const apiUrl = 'https://trefle.io/api/v1/plants';

export async function fetchPlants(query, filters) {
  return await fetch(`${apiUrl}/search?token=${apiKey}&q=${query}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        console.log("Plants fetched")
      return data.data; // Return the fetched data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

export async function getPlantDetails(plantId) {  
  return await fetch(`${apiUrl}/${plantId}?token=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        console.log("Plant Details Fetched")
      return data.data; // Return the fetched data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      return null;
    });
}