"use strict"

//function show(array) {
//	console.log(array);
//}

function line() {
	console.log('------------------');
}

//1
var products = [];
//console.log(products);
console.log(products[products.length -1]);
line();


//2
var styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-Ролл');
console.log(styles);

styles.splice(-1, 0, 'Класика');
console.log(styles);

console.log(styles.shift());

styles.unshift('Реп', 'Реггі');
console.log(styles);
line();


//3
function find(arr, value) {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == value){
			return i;
		}
	}
	return -1;
}

var arr = [1, 2, 3, 5, 9];
console.log(arr);
console.log(find(arr, 5));
console.log(find(arr, 'value'));
line();


//4
function filterRange(array, a, b) {
	var Array = [];
	for(var i = 0; i < array.length; i++){
		if ((array[i] >= a) & (array[i] <= b)){
			Array.push(array[i]);
		}
	}
	return Array;
}

var array = [1, 5, 56, 8, 9, 76];
console.log(filterRange(array, 2, 9));
//console.log(array);
line();


//5
function camelize(str) {
	var array = str.split("-");	
	  for (var i = 1 ; i < array.length ; i++) {
	    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
	  }
	  return array.join('');
}

var strArray = "my-string-test-line";
console.log(camelize(strArray));