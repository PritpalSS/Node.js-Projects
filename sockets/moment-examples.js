var moment = require('moment');
var now = moment();

//console.log(now.format('X'));  // X represents seconds since 1st Jan 1970
//console.log(now.format('x'));  // x represents milli seconds since 1st Jan 1970

var timestamp = 1490608367750;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));

/*now.subtract(1, 'year');

console.log(now.format());
console.log(now.format('MMM Do YYYY, h:mma'));*/