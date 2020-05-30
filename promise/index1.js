var fs = require('fs');
function readFilePromise(path){
	return new Promise(function(resolve, reject){
		fs.readFile(path,'utf8', function(err, data){
			if (err){
				reject(err);
			}
			else resolve(data);
		});
	});
};
async function run(){
	var song1 = await readFilePromise('./song1');
	var song2 = await readFilePromise('./song2');
	console.log(song1, song2);
	return [song1, song2];
}
run();