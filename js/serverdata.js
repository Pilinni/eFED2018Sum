
///////////////////////////////////////////////////////////////БЛОК ЗАПРОСА ПОГОДЫ НА 1 ДЕНЬ////////////////////////////////////////////////////////////
var longitude;
var latitude;
//Запрос погоды на 1 день
function loadArray(CityName){
console.log(CityName);
var ajaxURLtoday = `http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=256e77682b936e47aa0d7638b75fc891&q=${CityName}`;
document.getElementById('city-country').textContent = CityName;
var ajaxURLforcast = `http://api.openweathermap.org/data/2.5/forecast?q=${CityName}&units=metric&appid=256e77682b936e47aa0d7638b75fc891`
loadArray3(ajaxURLforcast).then(transform3);
return fetch(ajaxURLtoday)
.then(function (response) {
if (response.status != 200) {
console.log('Ошибка');
throw new Error(response.status)
}
return response.json()
})
.then(function (result) {
return result;
}
) .catch (function (error){alert('Ошибка')})
}
//Преобразование данных погоды на 1 день
function transform(str) {
console.log(str);
var renderData = {
weatherstatus: str.weather[0].main,
temp : str.main.temp,
humidity: str.main.humidity,
wind: str.wind.speed,
rainfall: str.clouds.all,
lon: str.coord.lon,
lat: str.coord.lat
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
var longitude = Math.round(renderData.lon);
var latitude = Math.round(renderData.lat);
var ajaxURLCO2 = `http://api.openweathermap.org/pollution/v1/co/${latitude},${longitude}/current.json?appid=256e77682b936e47aa0d7638b75fc891`;
loadArray2(ajaxURLCO2).then(transform2);
}
///////////////////////////////////////////////////////////////БЛОК ЗАПРОСА И ОБРАБОТКИ ДАННЫХ ЗАГРЯЗНЕНИЯ ВОЗДУХА////////////////////////////////////////////////////////////

//Запрос загрязнения воздуха
function loadArray2(ajaxURLCO2){
return fetch(ajaxURLCO2)
.then(function (response) {
if (response.status != 200) {
console.log('Ошибка');
throw new Error(response.status)
}
return response.json()
})
.then(function (result) {
return result;
}
) .catch (function (error){alert('Ошибка')})
}

//Преобразование данных загрязнения воздуха
function transform2(str) {
console.log(str);
var renderData2 = {
indexC: str.data[0].value
};
render2 (renderData2);
}
//Работа с DOM
function render2(renderData2){
document.getElementById('indexC').textContent = ('Загрязнение воздуха: ' + renderData2.indexC);
}
//Запрос данных на 5 дней
function loadArray3(ajaxURLforcast){
return fetch(ajaxURLforcast)
.then(function (response) {
if (response.status != 200) {
console.log('Ошибка');
throw new Error(response.status)
}
return response.json()
})
.then(function (result) {
return result;
}
) .catch (function (error){alert('Ошибка')})
}
//Преобразование данных за 5 дней
function transform3(str) {
  console.log(str);
var renderData3 = {
timeOfDay: str.list[0].dt_txt
};
render3 (renderData3);
}

function render3(renderData3){
  // var time_elements = document.querySelectorAll('.graphics-temparature__time');
  // for(i=0, i <time_elements.length, i++){
  //   time_elements[i].textContent =
  // }
  // console.log(time_elements);

//   for(var i=0, i<renderData3.timeOfDay, i++){
  console.log(renderData3.timeOfDay.slice(11,16));
// }
}

//Какой сегодня день?
function getDayInTable(){
var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
var date = new Date();
var day = date.getDay();
document.getElementById('dayofweek').textContent = (days[day]);
}
// Запуск ракеты
loadArray('Ижевск').then(transform);
getDayInTable();

//Забирает введённый город в поиск, и записывает его в переменную CityName
var findCityInput = document.getElementById('findCityInput');
findCityInput.addEventListener("keydown", changeCity);

function changeCity (event) {
if (event.keyCode == 13) {
event.preventDefault();
CityName = findCityInput.value; // Сюда приходит(записывается)
loadArray(CityName).then(value => transform(value));
findCityInput.value = "";
}
return;
}
