var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;
var goodThings = ["Compliment #1", "Compliment #2", "Compliment #3"];
var badThings = ["Horrible", "No Good", "Palabra Mal"];
Array.prototype.randomElement = function () {
	return this[Math.floor(Math.random() * this.length)]
};

function handleGood(request, response) {
	var grats = goodThings.randomElement();
	response.end(grats);
};

function handleBad(request, response) {
	var sleight = badThings.randomElement();
	response.end(sleight)
}
var server1 = http.createServer(handleGood);
var server2 = http.createServer(handleBad);

server1.listen(PORT1, function () {
	console.log("Ther Server is Listening on: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function () {
	console.log("Ther Server is Listening on: http://localhost:%s", PORT2);
});
