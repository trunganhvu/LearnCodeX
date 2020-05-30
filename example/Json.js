var fs = require('fs');
var text = fs.readFileSync('text.txt', {encoding: 'utf8'});
console.log(text);
var student = {
	name: 'Trung anh',
	age: 20,
	school: 'uet',
};
console.log(student);