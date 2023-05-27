#!/usr/bin/node

request = require('request');
const apiURL = process.argv[2];
const characterId = 18;

request(apiURL, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode !== 200) {
    console.log(response.statusCode);
  } else {
    const movieData = JSON.parse(body);
    const movieWithCharacter = movieData.results.filter(movie =>
      movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );
    console.log(movieWithCharacter.length);
  }
});
