var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");

var commonHeaders = {'Content-Type': 'text/html'};


// Handle HTTP route GET / and POST / i.e. Home
function home(request, response)
{
    if (request.url === "/")
    {
        if (request.method.toLowerCase() === "get")
        {
            // show search
            response.writeHead(200, commonHeaders);
            renderer.view("header", {}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        }
        else
        {
            // get post data from body
            request.on("data", function (postBody) {
                var query = querystring.parse(postBody.toString());
                // redirect to /:username
                response.writeHead(303, {"Location": "/" + query.username});
                response.end();
            });
            // extract username
        }
    }
}


// Handle HTTP route GET /:username i.e. /fry
function user(request, response) {
    var username = request.url.replace("/", "");
    if (username.length > 0)
    {
        response.writeHead(200, commonHeaders);
        renderer.view("header", {}, response);

        var studentProfile = new Profile(username);
        // Get JSON
        studentProfile.on("end", function (profileJSON) {
            // store the values which we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            };

            // Simple response
            renderer.view("profile", values, response);
            renderer.view("footer", {}, response);
            response.end();
        });
        // On Error
        studentProfile.on("error", function (error) {
            // show error
            renderer.view("error", {errorMessage: error.message}, response);
            renderer.view("search", {}, response);
            renderer.view("footer", {}, response);
            response.end();
        });

    }
}


module.exports.home = home;
module.exports.user = user;
