// var moment = require('moment');
// // var day =  moment("2019-4-22").format("DD MM YYYY");
// // console.log(day.getTime());
// var now = moment();
// var day = moment("1999-04-22");
// console.log(day.diff(now, 'day'));
function findMostFrequent(arr) {
// Viêt hàm tại đây!
	 var max_length = Math.max(...arr);
	var a = [];
	for (let i = 0; i < max_length+1; i++){
  		a[i] = 0;
	}	
	for (let i = 0; i < arr.length; i++){
	  	a[arr[i]]++;
	}
	console.log(a);
	var max = Math.max(...a);
	console.log(max);
	  var re = [];
	  var index = 0;
	  for (let i = 0; i < a.length; i++){
	  	if (a[i] == max){
	    	re[index] = i;
	      	index++;
	    }
	  }
  return re;
}
console.log(findMostFrequent([1,2,3,4,1,2,2]));