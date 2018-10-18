module.exports = (url: string) => {
  const fetch = require('node-fetch');
  
  return fetch(url)
  .then((res) => res.json())
  .then((data) => data)
}