var getHTML = require('./http-functions'); // links to the http-functions.js file

var options  = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};
function printHTML (html) { // this is the callback that is then activated to log a print out of the data.
  console.log(html);
}
getHTML(options, printHTML); // 1 . The options object with the host and path is passed in to getHTML to trigger getHTML