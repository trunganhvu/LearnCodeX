//console.log("hello , World!"); 
var myDog = {
	name: 'cho',
	age: 1,
	weight: 5
}
var str = JSON.stringify(myDog);
var stringCat = '{"name": "trung anh","age": 3}';
var toVar = JSON.parse(stringCat);
console.log(toVar.name);