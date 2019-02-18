//opening msg
let msg = 'JELP Balance Checker v1.0';
console.log(msg);

//grab string
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question(`Whats your name?`, function(name) {
	let isEqual = checkEqual(name)
	//display result
	console.log('equality check: ' + isEqual);
	rl.close();
});

//checks string for equality
function checkEqual(input){
	if (input == 'jaja') {
		return true;
	}
	else {
		return false;
	}
}