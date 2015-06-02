var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var sp = new SerialPort('\\\\.\\COM1', {
	baudrate: 9600,
	parser: serialport.parsers.readline("\n") 
});
sp.open(function () {
	sp.on("data", function (data) {
		var x = data;
		console.log(x);
	});
});



