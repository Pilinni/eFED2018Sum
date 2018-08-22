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
var number = /^[+-]?[0-9]*[.]?[0-9]*([eE][+-]?[0-9]*)?$/;
var goods =[];
function findNumbers(Array){

Array.forEach(function(element) {

  if (number.test(element) && element !="."){
  goods[goods.length] = element;
  return goods;
	}
});
 console.log(goods);
}
console.log(findNumbers(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]));
var goods =[];
console.log(findNumbers(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]));

// задание 11. День и месяц
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

// Задача 13.	Погода Anomaly
var array =  [{id: "id123",param: "-33"},
              {id: "id124",param: "22"},
              {id: "id125",param: "-11"},
              {id: "id126",param: "7"},
              {id: "id127",param: "30"},
              {id: "id128",param: "-8"},
              {id: "id321",param: "45"}
			 ];

 function findAnomaly(array, param) {
    var Min = array[0].param;
    var Max = array[0].param;
    var arrMin = {};
	  var arrMax = {};

    for (i = 0; i < array.length; i++)
		{
         if (Min <= array[i].param) {
            Min = Min;
			      arrMin = array[0];
        }
		     else {
			      Min = array[i].param;
			      arrMin = array[i];
		    }

    }
    for (i = 0; i < array.length; i++) {
         if (Max >= array[i].param) {
			      Max = Max;
            arrMax = array[0];
        }
		    else {
			      Max = array[i].param;
			      arrMax = array[i];
		        }
    }
    return console.log(arrMin,arrMax);
}
console.log(findAnomaly(array, `param`));

// задача 14. средняя температура за годах

var array = [{"city": "Izhevsk","year": "2016","avearage": -12,"min": -35,"max": 4},
			       {"city": "Izhevsk","year": "2016","avearage": -18,"min": -39,"max": 4},
			       {"city": "Izhevsk","year": "2016","avearage": -4,"min": -15,  "max": 6},
			       {"city": "Izhevsk","year": "2016","avearage": 5,"min": -15, "max": 22},
			       {"city": "Izhevsk","year": "2016","avearage": 14,"min": 16,"max": 35},
			       {"city": "Izhevsk","year": "2016","avearage": 21, "min": 11, "max": 36},
			       {"city": "Izhevsk","year": "2016","avearage": 26,"min": 14, "max": 40},
			       {"city": "Izhevsk","year": "2016","avearage": 28,"min": 4, "max": 36},
			       {"city": "Izhevsk","year": "2016","avearage": 18,"min": 8,"max": 28},
			       {"city": "Izhevsk","year": "2016","avearage": 7,"min": -15,"max": 29},
		       	 {"city": "Izhevsk","year": "2016","avearage": -1,"min": -20,"max": 11},
		      	 {"city": "Izhevsk","year": "2016","avearage": -16,"min": -16,"max": -4},
		       	]

function weatherStat(array, obj) {
    var currentYear = obj.date;
    var currentCity = obj.city;
    var lastyear = currentYear.getFullYear();
    var tempArray = [];
    for (i = 0; i < array.length; i++) {
        if ((array[i][`year`] == lastyear) && (array[i][`city`] == currentCity)) {
            tempArray[i] = array[i][`avearage`];
        }
    }
    var total = 0;
    for (var i = 0; i < tempArray.length; i++) {
        total += tempArray[i];
    }
    var avg = Math.round(total / tempArray.length);
     return console.log('Средняя температура за год' + ':' + avg + 'градусов');
 };
 console.log(weatherStat(array, {city: "Izhevsk", date: new Date(2016, 0)}));
