var Profile = require("./profile.js");

// Handle HTTP route GET / and POST / i.e. Home
function home(request, response)
{
    if (request.url === "/")
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Header\n");
        response.write("Search\n");
        response.end("Footer\n");
    }
}


// Handle HTTP route GET /:username i.e. /fry
function user(request, response) {
    var username = request.url.replace("/", "");
    if (username.length > 0) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Header\n");

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
            response.write(values.username + " has " + values.badges + "\n");
            response.end("Footer\n");
        });
        // On Error
        studentProfile.on("error", function (error) {
            // show error
            response.write(error.message + "\n");
            response.end("Footer\n");
        });

    }
}





module.exports.home = home;
module.exports.user = user;
