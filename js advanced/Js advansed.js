//Задача 2.	Промисификация

function compare(value1, value2) {
    var args = arguments;
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (args.length < 2) reject("Количество аргументов не равно двум!");
            if ([value1, value2].some(x => typeof x != "number" || isNaN(x))) reject("Передано не число!");

            resolve(Math.sign(value1 - value2));
        }, 1000);
    });
}

compare(0, 1)
    .then(console.log)
    .catch(console.log);
compare(0, "d")
    .then(console.log)
    .catch(console.log);
compare(0)
    .then(console.log)
    .catch(console.log);

//Задача	3.	Цепочка промисов
/////////////// -a

function random(sumWith) {
  return new Promise(function (resolve) {
      var timeout = Math.random() * 1000;
      setTimeout(function () {
              resolve(Math.random() * 3 + sumWith);
          },
          timeout)
  })
}

random(0)
    .then(random)
    .then(random)
    .then(function (result) {
        alert(result);
        return random(result);
    })
/////////////// -b

function random() {
  return new Promise(function (resolve) {
      var timeout = Math.random() * 3000;
      setTimeout(function () {
          resolve(Math.random() * 3);
      }, timeout)
  })
}

Promise.all([random(), random(), random(), random(), random(), random(), random()]).then(function (results) {
  console.log(results);
});

////////////////// Задача 4.	Замыкания
function makeCounter(length) {
    var history = [];
    var count = 0;
    return {
        next: function() {
            if (history.length == length) history.shift();
            history.push( ++count );
            return count;
        },
        prev: function() {
            if (history.length == length) history.shift();
            history.push( --count );
            return count;
        },
        history: history
    };
}
// [Дополнительно]
var counter = makeCounter();

counter.Next();
console.log(count);

counter.Next();
console.log(count);

counter.Prev();
console.log(count);

counter.Prev();
console.log(count);

counter.Prev();
console.log(count);

if (hystory.length >= 10) {
  hystory = hystory.slice(-10);
}

console.log(hystory);

/////////////////////Задача 5.	Контекст вызова и карринг
function sumWith(number) {
    return (this.currentValue += number);
}

var number = 2;
var currentValue = 0;
alert(sumWith(number));

// [Дополнительно]
currentValue = -1;
function returnAnother() {
    return sumWith(2);
}

/////////////////////Задача 6.	setInterval

var timerId = setInterval(function () {
  alert('one');
  alert('two');
  alert('three');
  alert('four');
  alert('five');
}, 2000);


setTimeout(function () {
  clearInterval(timerId);
  alert('stop');
}, 6000);


// [Дополнительно]

function delay(StepByStep, ms) {

  return function () {
    var savedThis = this;
    var savedArgs = arguments;

    setTimeout(function () {
      StepByStep.apply(savedThis, savedArgs);
    }, ms);
  };
}

function StepByStep(x) {
  alert(x);
}

var f1000 = delay(StepByStep, 1000);
var f3000 = delay(StepByStep, 4000);
var f5000 = delay(StepByStep, 9000);
var f7000 = delay(StepByStep, 16000);
var f9000 = delay(StepByStep, 25000);

StepByStep1000('1 секунда');
StepByStep3000('3 секунды');
StepByStep5000('5 секунд');
StepByStep7000('7 секунд');
StepByStep9000('9 секунд');
