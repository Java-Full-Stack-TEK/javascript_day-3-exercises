function smaller() {
	var input = prompt("Enter 2 integers separated by a space and I will tell you which is smaller:");
	console.log(input);
	var inputs = input.split(' ');
	for(let i = 0; i < inputs.length; i++) {
		if(isNaN(inputs[i])){
			console.log("Re-Enter Input")
			return smaller();
		}
	}
	var smallest = Number.MAX_VALUE;
	if(parseInt(inputs[0]) < parseInt(inputs[1])){
		smallest = inputs[0];
	} else {
		smallest = inputs[1];
	}
	alert("The smallest number entered was " + smallest + ".");
	return smallest;
}

function smaller3() {
	var input = prompt("Enter multiple integers separated by a space and I will tell you which is smaller:");
	console.log(input);
	var inputs = input.split(' ');
	for(let i = 0; i < inputs.length; i++) {
		if(isNaN(inputs[i])){
			console.log("Re-Enter Input")
			return smaller3();
		}
	}
	var smallest = Number.MAX_VALUE;
	for(let i = 0; i < inputs.length; i++) {
		if(smallest > inputs[i]) {
			smallest = inputs[i];
		}
	}
	alert("The smallest number entered was " + smallest + ".");
	return smallest;
}