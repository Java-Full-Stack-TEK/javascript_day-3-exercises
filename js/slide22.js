function isNumber(){
	var input = prompt("Enter some characters:");
	console.log(input);
	if(!isNaN(input)){
		alert(input + " is a number!")
	} else {
		alert(input + " is not a number!")
	}
	return !isNaN(input);
}

function convertToNumber(){
	var input = prompt("Enter some numbers and I will turn them into Integers.");
	console.log(input);
	alert("Turned " + input + " into " + parseInt(input) + ".")
	return parseInt(input);
}
