//Задание 1 – подсчёт букв.

function countChar(a, b) {
  var otvet = 0;                                      // счетчик
  var str = a.toLowerCase();
  var niz = b.toLowerCase();
  var c = str.indexOf(niz);
  while (c !== -1) {
    otvet++;
    c = str.indexOf(niz, c+1);
  }
return otvet;
}
console.log(countChar('MyRandomStrings', 'm'));

//Задание 2 – Глубокое сравнение

function deepCompare(a,b){
  // проверка типов
  if (typeof(a) != typeof(b)){
    return false;
  }
// проверка на кол-во свойств
  var N1 = 0, N2 = 0;
  for(var key in a) {
    N1++;
  }
  for(var key in b) {
    N2++;
  }
  if (N1 != N2){
    return false;
  }
  // проверка значений свойств
  for(var key in a) {
    if (typeof (a[key] )!= typeof (b[key])){
      return false;
    }
  }
  return true;
}

console.log (deepCompare ( {one:1, two:`2`} , {one:1, two: `2`}));
console.log (deepCompare ({one:1, two:`2`} , { two: 2}));
console.log (deepCompare ({one:1, two:`2`} , { one:1, two: 2}));
console.log (deepCompare ( {one:1, two:`2`} , { two: `2`, one:1 }));

//Задание 3 – Шахматная доска

function chessBoard (a, b){
     var board = "";
     for (var y = 0; y < a; y++) {
           for (var x = 0; x < b; x++) {
    	 if ((x + y) % 2 == 0)
      	      board += " ";
    	  else
      	      board += "#";
           }
           board += "\n";
     }
     return board;
}
console.log(chessBoard (8, 8));

//Задание 4 – Диапазон

function makeArray (a,b,c) {
	    if (c == undefined) c=1;
	    var arr = [];
	    if(c>0){
	        for (i=a;i<=b;i+=c){
	            arr.push(i);
	        }} else
	        for (i=a;i>=b;i+=c){
	            arr.push(i);
	        }
	    return arr;
	}
	function sum(arr) {
	    var sum=0;
	    for(var i=0;i<=arr.length-1;i++){
	        sum+=arr[i];
	    }
	    return sum;
	}
console.log(makeArray (1, 10));


function makeArray (a, b, c) {
  var arr = [];
  if (c == undefined) {
     c = 1
  }
  if (c < 0) {
    c = Math.abs(c)
  }
  if (a > b){
    while (a >= b) {
      arr.push(a);
      a=a-c;
    }
    return arr;
  }
  else {
    while (a <= b) {
      arr.push(a);
      a=a+c;
    }
    return arr;
  }
}
console.log (makeArray (1, 10));
console.log (makeArray (1, 10, 3));
console.log (makeArray (10, 1, -2));

//Задание 5 – Наоборот

function reverseArray(array) {
  var reversedArray = [];
  for (var i = array.length - 1; i >= 0; i--)
    reversedArray.push(array[i]);
  return reversedArray;
}
console.log(reverseArray( [1, 2, 3, 4]));
//  [4, 3, 2, 1]
function reverseArrayInPlace(array) {
  var buffer = 'undefinded';
  if (array.length % 2 == 0) {
    for (var i = 0; i < Math.floor(array.length / 2) + 1; i++) {
      buffer = array[i];
      array[i] = array[array.length-1 - i];
      array[array.length-1 - i] = buffer;
    }
  } else {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
      buffer = array[i];
      array[i] = array[array.length-1 - i];
      array[array.length-1 - i] = buffer;
    }
  }
  return array;
}
var arrayValue = ["A", "B", "C","D",];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
//  ["D", "C", "B", "A"];


// Задание 6 – Свёртка

function mergeArrays(arr1, arr2, arr3, ...arrN) {
  arr1 = arr1.concat(arr2, arr3, ...arrN)
  var obj = {};
  for (var i = 0; i < arr1.length; i++) {
        var str = arr1[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
        }
 return Object.keys(obj);
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2], [2, 4], [4, 6]));
