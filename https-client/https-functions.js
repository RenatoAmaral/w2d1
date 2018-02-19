
var getHTML = require('./https-functions/get-html');

var https = require('https');

var printHTML = function printHTML (html) {
  console.log(html);
};

getHTML.getHTML({
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }, printHTML);










