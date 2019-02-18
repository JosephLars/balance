// grab argument (string to check)
let input = process.argv[2];
// check for equality
let isEqual = checkEqual(input);
// construct message
var message = 'User input: "' + input + '" is ';
if (isEqual) {
	message += 'balanced.';
} else {
	message += 'not balanced.';
}
// display result
console.log(message);

// checks string for equality
function checkEqual(input){

	let stack = [];
	for (const c of input) {
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

	if (stack.length === 0) {
		return true;
	} else {
		return false;
	}

} 
