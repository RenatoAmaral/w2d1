var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/')
        .on('error', function (err) {
          // body...
          throw err;
        })
        .on('data' , function( data){
          console.log('Downloading image...');
        })

        .on('end' , function(){
          console.log('Download complete.');
        })

        .on('response', function(response) {
          console.log('Message status is :',response.statusMessage);
          console.log('Header content:', response.headers['content-type'])
        })
        .pipe(fs.createWriteStream('./future.jpg'));



