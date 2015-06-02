// handles the reading of files and merge in value

var fs = require("fs");

function mergeValues(values, content)
{
    // cycle over the keys
    for(var key in values) {
        // replace all {{keys}} with the value from the values object
        content = content.replace("{{" + key + "}}", values[key]);
    }

    return content
}

function view(templateName, values, response)
{
    // read from the template files
    fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
    // insert values into content
    fileContents = mergeValues(values, fileContents);
    // write out to the response
    response.write(fileContents);
}

module.exports.view = view;