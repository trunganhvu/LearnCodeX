var fs = require('promise-fs');
function onDone(song){
	console.log(song);
}
function onErr(err){
	console.log(err);
}
fs.readFile('./song.txt', { encoding: 'utf8'})
	.then(onDone(song))
	.catch(onErr(err));
