 var https = require('https');   





 

//getHTML(options, printHTML)


module.exports = function getHTML (options, callback) {

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




  