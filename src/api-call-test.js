const request = require("request");

const options = {
    url: 'https://xkcd.now.sh/?comic=305',
    method: 'GET',

}

request(options, function(err, res, body) {
    let json = JSON.parse(body);
    console.log(json);
});