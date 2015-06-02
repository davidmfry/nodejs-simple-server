// handles the reading of files and merge in value

var fs = require("fs");

function view(templateName, values, response)
{
    // read from the template files
    fileContents = fs.readFileSync('./views/' + templateName + '.html');
    response.write(fileContents);
    // insert values into content

    // write out to the response
}

module.exports.view = view;