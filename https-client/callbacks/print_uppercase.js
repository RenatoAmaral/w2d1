var getHTML = require('../https-functions/get-html');

var   requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

 console.log(html.toUpperCase());

}

getHTML.getHTML(requestOptions, printUpperCase );