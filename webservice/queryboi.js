//This script will be used to request the information from tmdb and filter it down to fields: movie_id, title, poster, and popularity summary
//query will be changed to user input
whatchalookingfor = "jack+reacher"
//request against tmdb with api key embedded in request (bad practice)
// Define the API URL
const apiUrl = 'https://api.themoviedb.org/3/search/movie?query=${whatchalookingfor}&api_key=410b7494ecc8d32040730d66aabeabf4';


// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });