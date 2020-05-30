var readlineSync = require('readline-sync');
var fs = require('fs');
var student =[];
showMenu = function(){
	console.log('1. show');
	console.log('2. create');
	console.log('3. save & exit');
	var option = readlineSync.question('>');
	console.log(option);
	switch(option){
		case '1': 
			showStudent(); 
			showMenu();
			break;
		case '2': 
			showCreateStudent(); 
			showMenu();
			break;
		case '3': 
			saveAndExit(); 
			showStudent();
			break;
		default:
			console.log('Wrong option');
			showMenu();
			break;

	}
}
function loadData(){
 	var dataContent = fs.readFileSync('./data.json');
 	student = JSON.parse(dataContent);
}
function showStudent(){
	for (var stu of student){
		console.log(stu.name, stu.age);
	}
}
function showCreateStudent(){
	let name = readlineSync.question('Name: ');
	let age = readlineSync.question('age: ');
	var stu = {
		name: name,
		age: parseInt(age),
	};
	student.push(stu);
}
function saveAndExit(){
	var content = JSON.stringify(student);
	fs.writeFile('./data.json',content);
}
function main(){
	// loadData();
	// showMenu();
	console.log(__filename);
	console.log(__dirname);
}

main();