#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const apiURL = 'https://swapi-api.hbtn.io/api/films/';

request(apiURL + movieId, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode !== 200) {
    console.log('Error code: ' + response.statusCode);
  } else {
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  }
});
