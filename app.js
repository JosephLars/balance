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
	console.log('Checking "' + input + '" for equality')

	let stack = [];
	for (const c of input) {
		console.log(c);
		if (c == '(') {
			stack.push(c);
		} else if (c == ')') {
			if (stack.length == 0) {
				return false;
			} else {
				stack.pop();
			}
		}
	}

	console.log("stack: ");
	console.log(stack);

	if (stack.length === 0) {
		return true;
	} else {
		return false;
	}


} 
