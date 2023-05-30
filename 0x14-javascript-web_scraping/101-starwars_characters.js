#!/usr/bin/node

const request = require('request');
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

request(apiUrl, (err, res, body) => {
  if (err) {
    console.log(err);
  } else if (res.statusCode !== 200) {
    console.log(res.statuCode);
  } else {
    const charactersUrl = JSON.parse(body).characters;
    const characterNames = [];

    function getCharName (url) {
      request(url, (err, resp, body) => {
        if (err) {
          console.log(err);
        } else if (resp.statusCode !== 200) {
          console.log(resp.statusCode);
        } else {
          const characterName = JSON.parse(body).name;
          characterNames.push(characterName);

          if (characterNames.length === charactersUrl.length) {
            characterNames.forEach(name => console.log(name));
          }
        }
      });
    }

    charactersUrl.forEach(characterUrl => getCharName(characterUrl));
  }
});
