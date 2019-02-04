function getRandomArray(len) {
	let array = [];
	
	for (var i=0; i < len; i++) {
		let number =  Math.random() * (50-1) +1;
		let num = Math.round(number);
		array[i] = num;
	}
	return array;
}
getRandomArray(20);



function A (string) {
	if (string.indexOf("https://") ==0 && string.lastIndexOf(".html", string.length-5) >0)  {
		return true;
	}
	return false;
}


