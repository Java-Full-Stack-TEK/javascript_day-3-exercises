function leap() {
	var input = prompt("Enter a 4-digit Integer that represents a year:");
	console.log(input);
	if(isNaN(input)){
		console.log("Re-Enter Input")
		return leap();
	}
	var year = parseInt(input)
	if((year % 4) != 0) {
		alert("Common year");
	}else if((year % 100) != 0) {
		alert("Leap year");
	}else if((year % 400) != 0) {
		alert("Common year");
	}else{
		alert("Leap year");
	}
}