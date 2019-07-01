var tokenMeJSON = require('../tokenme.json')
var generateSampleDataJSON = require('./generateSampleDataJSON.js')
var generateSampleDataSVG = require('./generateSampleDataSVG.js')

var fs = require('fs');
var index;
var tokenid;

for (index in tokenMeJSON.tokens) {

    tokenid = parseInt(index) + 1;

    var svg = generateSampleDataSVG(tokenMeJSON.tokens[index], tokenid);
    fs.writeFile(`./apiSampleData/tokenme/${tokenid}.svg`, svg, function(err, svg){
        if (err) console.log(err);
    });

    var data = generateSampleDataJSON(tokenMeJSON.tokens[index], tokenid);
    fs.writeFile(`./apiSampleData/tokenme/${tokenid}`, data, function(err, data){
        if (err) console.log(err);
    });

    console.log('Generated sample data for tokenId: ' + tokenid)
}