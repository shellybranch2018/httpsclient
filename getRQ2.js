 var https = require('https');   

function getAndPrintHTML () {
//var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var body = "";

  https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {

    body = data.concat('\n');

    console.log(body);
  	//console.log(data.concat('\n'));
    //console.log('Chunk Received. Length:', data.length);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });


});
}



getAndPrintHTML()