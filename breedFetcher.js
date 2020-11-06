const request = require('request');
const breed = process.argv.slice(2,3);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    throw error;
  } else if (!breed) {
    return [];
  } else if (body === '[]') {
    console.log('Breed not found.');
  } else {
    const catData = JSON.parse(body);
    console.log(catData[0].description);
  }
});
