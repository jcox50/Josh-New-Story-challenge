const request = require("request");

const options = {
    url: 'https://xkcd.now.sh/?comic=latest',
    method: 'GET',

}

request(options, function(err, res, body) {
    let json = JSON.parse(body);
    console.log(json);
});