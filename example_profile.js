var Profile = require("./profile.js");

var studentProfile = new Profile("fry");

/**
 * When the JSON body is fully received the
 * the "end" event is triggered and the fill body
 * is give to the handler or callback
 **/
studentProfile.on("end", console.dir);

/**
 * If a parsing, network or HTTP error occurs an
 * error object is passed in to the handler aor callback
 **/
studentProfile.on("error", console.error);

