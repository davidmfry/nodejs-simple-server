var router = require("./router.js");

// Create a web server
var http = require('http');
http.createServer(function(request, response)
{
    router.home(request, response);
    router.user(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');




// 4. Function that handles the reading of files and merge in value
    // read from file and get a string
        // merge values into string



