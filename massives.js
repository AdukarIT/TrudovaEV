// Task 1

var evenNumbers = [];
for (var i=2; i<=20; i++) {
	if (i%2===0) {
		evenNumbers.push(i);
	}
}
console.log(evenNumbers);

// Task 2

var evenNumbers = [];
for (var i=2; i<=20; i++) {
	if (i%2===0) {
		evenNumbers.push(i);
	}
}
console.log(evenNumbers);

for (var i=0; i<evenNumbers.length; i++) {
	evenNumbers[i]=i*5;
}
console.log(evenNumbers);

// Task 3

var arr=[];
for (var i=1; i<=35; i++) {
arr.push(i);
}
arrDeleted = arr.splice(0, 10);
console.log(arr);
arrEndPlus = arr.concat(arrDeleted);

