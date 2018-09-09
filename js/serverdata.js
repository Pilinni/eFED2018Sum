///////////////////////////////////////////////////////////////БЛОК ЗАПРОСА ПОГОДЫ НА 1 ДЕНЬ////////////////////////////////////////////////////////////
var CityName = 'Izhevsk';

//Запрос погоды на 1 день
function loadArray(callback, CityName){
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {callback(xhr.responseText)}
  console.log (CityName); // Сюда не приходит(не записывается почему???)
  var ajaxURL = `http://api.openweathermap.org/data/2.5/weather?q=${CityName},RU&units=metric&APPID=256e77682b936e47aa0d7638b75fc891`;
  xhr.open("GET", ajaxURL, true);
  xhr.send();
}
//Препобразование данных погоды на 1 день
function transform(str) {
    var bigArray = JSON.parse(str);
    console.log (bigArray);
    var renderData = {
      weatherstatus:bigArray.weather[0].main,
      temp : bigArray.main.temp,
      humidity: bigArray.main.humidity,
      wind: bigArray.wind.speed,
      rainfall: bigArray.clouds.all
    };
    if(renderData.weatherstatus == "Clouds"){
       renderData.weatherstatus = 'облачно';
    }
    if(renderData.weatherstatus == "Rain"){
       renderData.weatherstatus = 'дождливо';
    }
    if(renderData.weatherstatus == "Sun"){
       renderData.weatherstatus = 'солнечно';
    }
    if(renderData.weatherstatus == "Clear"){
       renderData.weatherstatus = 'ясно';
    }
    if(renderData.weatherstatus == "Fog"){
       renderData.weatherstatus = 'туман';
    }
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
function loadArray2(callback){
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {callback(xhr.responseText)}
  xhr.open("GET", "http://api.openweathermap.org/pollution/v1/co/56,53/current.json?appid=256e77682b936e47aa0d7638b75fc891", true);
  xhr.send();
}
//Преобразование данных загрязнения воздуха
function transform2(str) {
    var bigPollution = JSON.parse(str);
    console.log (bigPollution);
    var renderData2 = {
      indexC: bigPollution.data[0].value
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
loadArray(transform);
loadArray2(transform2);
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
