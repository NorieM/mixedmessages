
const fetch = require('node-fetch');

const url = 'https://type.fit/api/quotes';

async function getBlock() {
  let alLQuotes;
  try {
    var response = await fetch(url);
    allQuotes = await response.json();
    getRandomQuote(allQuotes);
  } catch (e) {
    console.error(e)
  }
}

getBlock();

const getRandomQuote = (quotes) => {
  if (quotes) {
    const idx = Math.floor(Math.random() * quotes.length);
    console.log(quotes[idx]['text']);
    console.log(quotes[idx]['author']);
  }
}
