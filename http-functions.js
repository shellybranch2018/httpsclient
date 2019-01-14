 var https = require('https');   



module.exports = function getHTML (options, callback) { // 2. This code runs to retrieve the data and once it has all of the data, it triggers the callback below

  var body = "";
  https.get(options, function (response) {
  
  response.setEncoding('utf8');
  
  response.on('data', function (data) {

    body = data.concat('\n');

  });


  response.on('end', function() { 
    callback(body);
  });


});
}




  