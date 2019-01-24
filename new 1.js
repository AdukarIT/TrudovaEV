function isTriangleRect (katetA, katetB, gipotC) {
return gipotC**2===katetA**2+katetB**2;
}


// 2
function repeat (str, n=2) {
var result="";
for(var i=1; i<=n; i++)
result+=str;
return result;
}
undefined
repeat("zoo", 3);
"zoozoozoo"


// 3

function check (students, desks) {

var pairs = Math.ceil(students/2);
var counter;
var counter2;

if (pairs > desks) {
counter = pairs - desks;
console.log(counter + " desks less");

}

else if (desks > pairs) {
counter2 = desks - pairs;
console.log(counter2 + " desks more");
}

else {
console.log("enough");
}
}


// 10

function getDeviders (number) {
	
if (number>20 || number<2) {
return;
}
    var counter=0;
    for (var i=1; i<=number; i++) {

        if (number%i===0) {
        console.log(i);
        counter++;
        }
    }
return "количество делителей = " + counter;
}

function name() {
 for (var i=2; i<=20; i++) {
console.log("This is # " + i);
console.log(getDeviders(i));

}
}