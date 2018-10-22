module.exports = (url: string) => {
  const fetch = require('node-fetch');
  const Joke = require('../../entities/joke');
  
  return fetch(url)
  .then((res) => res.json())
  .then((data) => new Joke(data.value.joke))
}