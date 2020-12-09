// Built in URL Module
var url = require("url");
//1 parse url url.parse merhod with returns URL obj with
//each specific part

var google_address = "http://google.com/index.html?year=2020&month=december";

var parseAddress = url.parse(google_address, true);

console.log(parseAddress.host); //returns Domain name
console.log(parseAddress.pathname); //returns pathName of those files
console.log(parseAddress.search); //returns query

var queryingData = parseAddress.query; //returns obj of querying props
console.log(queryingData.year);
