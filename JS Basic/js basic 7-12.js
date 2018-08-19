// Задание 7.	Every и some
function every(array, isEvery) {
  if (!Array.isArray(array)) {
    return "Некорректные данные"
  }
  for (i = 0; i < array.length; i++) {
    if (!isEvery(array[i])) {
      return false;
    }
  }
  return true;
}

function some(array, isSome) {
  if (!Array.isArray(array)) {
    return "Некорректные данные"
  }
  for (i = 0; i < array.length; i++) {
    if (isSome(array[i])) {
      return true;
    }
  }
  return false;
}

console.log(every([1, 4, NaN, 6], Number.isNaN));
console.log(every([NaN, NaN], Number.isNaN));
console.log(some([1, 2, 6], Number.isNaN));
console.log(some([1, 4, NaN, 6], Number.isNaN));

// Задание 8. Повтор
function multiplyOrThrow(a, b) {
if (Math.random() < 0.5) {
return a * b;
} else {
throw 'MultiplicatorUnitFailure';
}
}
function repeat(a, b) {
try {
return multiplyOrThrow(a, b);
} catch (error) {
console.log(error);
return repeat(a, b);
}
}
console.log(repeat(3,5));

// Задание 9. Кавычки в тексте

function replaceQuotes(str){
  return str.replace(/\B‘|’\B/g, '"');
}
console.log(replaceQuotes("I’m the ‘hero’"));

// Задание 10. Найти числа
var number = /^(?:...)\D$/;
var goods =[];
function findNumbers(Array){

Array.forEach(function(element) {

  if (!number.test(element)){
  goods[goods.length] = element;
  return goods;
	}
});
 console.log(goods);
}
console.log(findNumbers(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]));

// задание 11. 11.	День и месяц
function getNames(){
var months = [
	'January', 'February', 'March', 'April', 'May', 'June',
	'July ', 'August', 'September ', 'October ', 'November', 'December'
];
var days = [
	'	Sunday ', ' Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ',
	' Saturday '
];
var date = new Date();
var month = date.getMonth();
var day = date.getDay();
return (months[month] + "," + days[day]);
}

console.log(getNames(new Date()));

// Задание 12. Разница в годах

function differenceInYears(a, b){
  var date1 = a;
  var date2 = b;
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return ((diffDays/365).toFixed(1));
}
console.log(differenceInYears(new Date(2014, 10, 2), new Date(2016, 10, 2)));
console.log(differenceInYears(new Date(2014, 0), new Date(2014, 6)));
