#!/usr/bin/node

const request = require('request');
const apiURL = process.argv[2];
const characterId = 18;

request(apiURL, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode !== 200) {
    console.log(response.statusCode);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;
    for (const fIndex in films) {
      const filmChars = films[fIndex].characters;
      for (const cIndex in filmChars) {
        if (filmChars[cIndex].includes(characterId)) {
          count++;
	}
      }
    }
    console.log(count);
  }
});
