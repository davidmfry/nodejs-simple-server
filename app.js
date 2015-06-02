// 1. Create a web server
var http = require('http');
http.createServer(function(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    setInterval(function(){
        response.write(new Date() + "\n");
    }, 1000);
    //response.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');

// 2. Handle HTTP route GET / and POST / i.e. Home
    // if url == "/" && GET
        // show the search
    // if url == "/" && POST
        // redirect to /:username

// 3. Handle HTTP route GET /:username i.e. /fry
    // if url == "/..."
        // get json from treehouse
            //on "end"
                //show profile
            //on "error"
                //show error

// 4. Function that handles the reading of files and merge in value
    // read from file and get a string
        // merge values into string



