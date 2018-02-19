var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){

    var tmpData = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      tmpData += data;
    });

    response.on('end', function() {
      console.log('All data received after buffering .....' + tmpData);
    });

  });
};

getAndPrintHTML();

