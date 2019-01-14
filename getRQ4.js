 var https = require('https');   

 


function getHTML (options, callback) { // 2. options receives the requestOptions and requestOptions now becomes 'options', 4. printHTML now becomes 'callback'


  var body = "";

  https.get(options, function (response) {

  
  response.setEncoding('utf8');

  
  response.on('data', function (data) {

    body = data.concat('\n');


    //console.log('Chunk Received. Length:', data.length);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() { // 3. when all of the data is received, the callback is invoked, printHTML. 
    callback(body);
  });


});
}

function printHTML (html) { //5. this function takes the data from the body and prints it.
  console.log(html);
}

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


getHTML(requestOptions, printHTML) //  1.requestOptions is passed to the options paremeter to trigger getHTML
