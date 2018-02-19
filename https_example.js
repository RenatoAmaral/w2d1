var https = require('https');

var requestOptions = {
  host: 'example.com',
  path: '/'
};

https.get(requestOptions, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data){
    console.log('Chunk received. Length: ', data.Length);
  });

  response.on('end', function(){
    console.log('Response stream complete.');
  });

});