const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null); //I'm a bit confused about this line. Have to study callbacks more
    } else if (!breed) {
      return [];
    } else if (body === '[]') {
      callback(`${breed} not found.`, null);
    } else {
      const catData = JSON.parse(body);
      console.log(catData[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };