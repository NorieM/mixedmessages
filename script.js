const axios = require('axios').default;


const getRandomIntBetween = (min=0, max) => {
  return Math.floor(Math.Random * (max-min) + min);
}


let quotes = axios('https://type.fit/api/quotes') 
  .then(function (response) {
    // handle success
    quotes = response;
  })

console.log(quotes);
