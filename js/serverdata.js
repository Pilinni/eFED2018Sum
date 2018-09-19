///////////////////////////////////////////////////////////////БЛОК ЗАПРОСА ПОГОДЫ НА 1 ДЕНЬ////////////////////////////////////////////////////////////
//Запрос погоды на 1 день

function loadArray(callback, ajaxURLcity){
  fetch(ajaxURLcity)
     .then(function (response) {
       return Promise.all([response.status, response.json()])
     })
     .then(function (result) {
       if (result[0] != 200) {
         console.log('Ошибка');
       } else {
         callback(result[1]);
       }
     }
   ) .catch (function (error){alert('Ошибка') })
}
//Преобразование данных погоды на 1 день
function transform(str) {
    var renderData = {
      weatherstatus: str.weather[0].main,
      temp : str.main.temp,
      humidity: str.main.humidity,
      wind: str.wind.speed,
      rainfall: str.clouds.all
    };
    if(renderData.weatherstatus == "Clouds"){renderData.weatherstatus = 'облачно';}
    if(renderData.weatherstatus == "Rain"){renderData.weatherstatus = 'дождливо';}
    if(renderData.weatherstatus == "Sun"){renderData.weatherstatus = 'солнечно';}
    if(renderData.weatherstatus == "Clear"){renderData.weatherstatus = 'ясно';}
    if(renderData.weatherstatus == "Fog"){renderData.weatherstatus = 'густой туман';}
    if(renderData.weatherstatus == "Mist"){renderData.weatherstatus = 'пелена';}

  render (renderData);
}
// Работа с DOM
function render(renderData) {
  document.getElementById('weatherstatus').textContent = (renderData.weatherstatus);
  document.getElementById('ra').textContent = (Math.round(renderData.temp) + 'C');
  document.getElementById('rainfall').textContent = ('Вероятность осадков: ' + renderData.rainfall + '%');
  document.getElementById('humidity').textContent = ('Влажность: ' + Math.round(renderData.humidity) + '%');
  document.getElementById('wind').textContent = ('Ветер: ' + renderData.wind + 'м/c');
}
///////////////////////////////////////////////////////////////БЛОК ЗАПРОСА И ОБРАБОТКИ ДАННЫХ ЗАГРЯЗНЕНИЯ ВОЗДУХА////////////////////////////////////////////////////////////

//Запрос загрязнения воздуха
function loadArray2(callback, ajaxURLCO2){
  fetch(ajaxURLCO2)
     .then(function (response) {
       return Promise.all([response.status, response.json()])
     })
     .then(function (result) {
       if (result[0] != 200) {
         console.log('Ошибка');
       } else {
         callback(result[1]);
       }
     }
   ) .catch (function (error){alert('Ошибка') })
}
//Преобразование данных загрязнения воздуха
function transform2(str) {
      var renderData2 = {
      indexC: str.data[0].value
    };
  render2 (renderData2);
}
//Работа с DOM
function render2(renderData2){
  document.getElementById('indexC').textContent = ('Загрязнение воздуха: ' + renderData2.indexC);
}
//Какой сегодня день?
function getDayInTable(){
  var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница',	'суббота'];
  var date = new Date();
  var day = date.getDay();
  document.getElementById('dayofweek').textContent = (days[day]);
}
// Запуск ракеты

var ajaxURLcity = `http://api.openweathermap.org/data/2.5/weather?q=Izhevsk,RU&units=metric&APPID=256e77682b936e47aa0d7638b75fc891`;
loadArray(transform, ajaxURLcity);
var ajaxURLCO2 = `http://api.openweathermap.org/pollution/v1/co/56,53/current.json?appid=256e77682b936e47aa0d7638b75fc891`;
loadArray2(transform2, ajaxURLCO2);
getDayInTable();



//Забирает введённый город в поиск, и записывает его в переменную CityName
var findCityInput = document.getElementById('findCityInput');
findCityInput.addEventListener("keydown", changeCity);

function changeCity (event) {
  if (event.keyCode == 13) {
              event.preventDefault();
              CityName = findCityInput.value; // Сюда приходит(записывается)
              console.log (CityName);
              findCityInput.value = "";
              loadArray(transform);
              loadArray2(transform2);
          }
  return;
}
