const fs = require('fs');

fs.readFile('./../books.json', 'utf8', (error, json) => {
  var books = JSON.parse(json).data
  console.log(books);
})
