#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else if (response.statusCode !== 200) {
    console.log(response.statusCode);
  } else {
    const characters = JSON.parse(body).characters;

    characters.forEach(characterUrl => {
      request(characterUrl, (err, response, body) => {
        if (err) {
          console.log(err);
        } else if (response.statusCode !== 200) {
          console.log(response.statusCode);
        } else {
          const characterName = JSON.parse(body).name;
          console.log(characterName);
        }
      });
    });
  }
});
