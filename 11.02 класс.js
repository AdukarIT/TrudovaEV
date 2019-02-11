//1

let obj = { greeting: "Привет" };
function func(surname, name) {
alert(this.greeting + ', ' + surname + ' ' + name);
}


func.call(obj, "Krukovich", "Alexey");


//2

let obj = { greeting: "Привет" };
function func(surname, name) {
alert(this.greeting + ', ' + surname + ' ' + name);
}
var array = ["john", "carter"];
func.apply (obj, array);

//ДЗ 1
var str = "Все задания выполнять в одном JS-файле. Задания разделять комментариями, в которых указывать номера задач.";
var array = str.split("");
function search(unicodeSymbol, arr) {
	let result = arr.filter(function(item){
		return item.charCodeAt() == unicodeSymbol;
});
	console.log(result);
	return result.length;	
}
search(97, array);











