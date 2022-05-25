function month() {
	var input = prompt("Enter a 4-digit year and a number for the month of the year:");
	console.log(input);
	var inputs = input.split(' ');
	for(let i = 0; i < inputs.length; i++) {
		if(isNaN(inputs[i])){
			console.log("Re-Enter Input")
			return month();
		}
	}
	var year = parseInt(inputs[0]);
	var month = parseInt(inputs[1]);
	let leap = false;
	if((year % 4) != 0) {
		leap = false;
	}else if((year % 100) != 0) {
		leap = true;
	}else if((year % 400) != 0) {
		leap = false;
	}else{
		leap = true;
	}
	if((month % 2) == 1) {
		return "31 days";
	}else if(month == 2 && leap){
		return "29 days";
	}else if(month == 2 && !leap){
		return "28 days";
	}else{
		return "30 days";
	}
}