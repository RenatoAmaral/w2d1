var https = require('https');



function getHTML (options, callback) {



  https.get(options, function(response){


    var tmpData = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      tmpData += data;
    });

    response.on('end', function() {
     callback('All data received after buffering .....' + tmpData);
    });

  });

};


getHTML({
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }, printHTML);

function printHTML (html) {
  console.log(html);
}