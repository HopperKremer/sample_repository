//2 date str
var dateStr = new Date("31 August, 2019");
console.log(dateStr);

var dateStr2 = new Date("2014-03-25");
console.log(dateStr2);

//Meth
//1. Date.now
//Milliseconds since January, 1, 1970 UTC
//leap secs ignored
var milliSecs = Date.now(2019, 8, 8);
console.log("ms: " + milliSecs);

//2. Date.parst
//parses str representation of date and returns ms

var msDateparse = Date.parse("31 August, 2019");
console.log(msDateparse);

//3. Date.UTC

var UTCDate = Date.UTC(2019, 12, 20);
console.log("UTC: " + UTCDate);

//Date instances
//1. getDate()
var date = new Date();
console.log(date.getDate());

//2.getDay()
console.log(date.getDay());

var date1 = new Date('14 January, 2020')
console.log(date1.getDay()) //

//3. getFullYear
var date2 = new Date("november, 2010");
console.log(date2.getFullYear());

//4. getHours
console.log("hrs: " date2.getHours())

//5
console.log("Mins: " date2.getMinutes())

//6
console.log("Month: " date2.getMonth())

//7
console.log("Ms: " date2.getMilliseconds())


var date3 = Date.now()
console.log(date2)

//8
console.log("secs:" + date2.getSeconds)

//9
console.log("time ms:" + date2.getTime())

var end, start
start = new Date(2010,12,19)

// for var i = 0; i < 1000; i++){
//     Math.sqrt(i)
// }
end = new Date(2011,12,19)
console.log("Operation took " + (end.getTime() - start.getTime() + 'millisec')