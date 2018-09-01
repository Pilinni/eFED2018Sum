var element = document.getElementsByClassName('activity');
var time = document.getElementsByClassName('time-of-day-temperature');
var illumination = document.getElementsByClassName('trigger-button')

function nextclick() {

    element[0].classList.add('block-none');
    element[0].nextElementSibling.classList.add('activity');
    element[0].nextElementSibling.classList.remove('block-none');
    element[0].classList.remove('activity');
    if (element[0].getAttribute('class') == 'button-next activity'){
      element[0].classList.remove('activity');
      time[0].classList.add('activity');
      time[0].classList.remove('block-none');
  }
  if (time[0].getAttribute('class') == 'time-of-day-temperature activity') {
    illumination[0].style.backgroundColor = '#86FF73';
    illumination[4].style.backgroundColor = 'white';
  }
  if (time[1].getAttribute('class') == 'time-of-day-temperature activity') {
    illumination[1].style.backgroundColor = '#86FF73';
    illumination[0].style.backgroundColor = 'white';
  }
  if (time[2].getAttribute('class') == 'time-of-day-temperature activity') {
    illumination[2].style.backgroundColor = '#86FF73';
    illumination[1].style.backgroundColor = 'white';
  }
  if (time[3].getAttribute('class') == 'time-of-day-temperature activity') {
    illumination[3].style.backgroundColor = '#86FF73';
    illumination[2].style.backgroundColor = 'white';
  }
  if (time[4].getAttribute('class') == 'time-of-day-temperature activity') {
    illumination[4].style.backgroundColor = '#86FF73';
    illumination[3].style.backgroundColor = 'white';
  }
}
function backclick() {
  element[0].classList.add('block-none');
  element[0].previousElementSibling.classList.add('activity');
  element[0].nextElementSibling.classList.remove('activity');
  element[0].classList.remove('block-none');
  if (element[0].getAttribute('class') == 'button-back rotate-strelka activity'){
    element[0].classList.remove('activity');
    time[4].classList.add('activity');
    time[4].classList.remove('block-none');
  }
  if (time[0].getAttribute('class') == 'time-of-day-temperature activity') {
    illumination[0].style.backgroundColor = '#86FF73';
    illumination[1].style.backgroundColor = 'white';
  }
  if (time[1].getAttribute('class') == 'time-of-day-temperature activity') {
    illumination[1].style.backgroundColor = '#86FF73';
    illumination[2].style.backgroundColor = 'white';
  }
  if (time[2].getAttribute('class') == 'time-of-day-temperature activity') {
    illumination[2].style.backgroundColor = '#86FF73';
    illumination[3].style.backgroundColor = 'white';
  }
  if (time[3].getAttribute('class') == 'time-of-day-temperature activity') {
    illumination[3].style.backgroundColor = '#86FF73';
    illumination[4].style.backgroundColor = 'white';
  }
  if (time[4].getAttribute('class') == 'time-of-day-temperature activity') {
    illumination[4].style.backgroundColor = '#86FF73';
    illumination[0].style.backgroundColor = 'white';
  }
}


function trigger__button1(){
  time[0].classList.add('activity');
  time[0].classList.remove('block-none');
  time[1].classList.remove('activity');
  time[2].classList.remove('activity');
  time[3].classList.remove('activity');
  time[4].classList.remove('activity');
  time[1].classList.add('block-none');
  time[2].classList.add('block-none');
  time[3].classList.add('block-none');
  time[4].classList.add('block-none');
  illumination[0].style.backgroundColor = '#86FF73';
  illumination[1].style.backgroundColor = 'white';
  illumination[2].style.backgroundColor = 'white';
  illumination[3].style.backgroundColor = 'white';
  illumination[4].style.backgroundColor = 'white';
}

function trigger__button2(){
  time[0].classList.remove('activity');
  time[0].classList.add('block-none');
  time[1].classList.add('activity');
  time[2].classList.remove('activity');
  time[3].classList.remove('activity');
  time[4].classList.remove('activity');
  time[1].classList.remove('block-none');
  time[2].classList.add('block-none');
  time[3].classList.add('block-none');
  time[4].classList.add('block-none');
  illumination[0].style.backgroundColor = 'white';
  illumination[1].style.backgroundColor = '#86FF73';
  illumination[2].style.backgroundColor = 'white';
  illumination[3].style.backgroundColor = 'white';
  illumination[4].style.backgroundColor = 'white';
}

function trigger__button3(){
  time[0].classList.remove('activity');
  time[0].classList.add('block-none');
  time[1].classList.remove('activity');
  time[2].classList.add('activity');
  time[3].classList.remove('activity');
  time[4].classList.remove('activity');
  time[1].classList.add('block-none');
  time[2].classList.remove('block-none');
  time[3].classList.add('block-none');
  time[4].classList.add('block-none');
  illumination[0].style.backgroundColor = 'white';
  illumination[1].style.backgroundColor = 'white';
  illumination[2].style.backgroundColor = '#86FF73';
  illumination[3].style.backgroundColor = 'white';
  illumination[4].style.backgroundColor = 'white';
}

function trigger__button4(){
  time[0].classList.remove('activity');
  time[0].classList.add('block-none');
  time[1].classList.remove('activity');
  time[2].classList.add('block-none');
  time[3].classList.remove('block-none');
  time[4].classList.remove('activity');
  time[1].classList.add('block-none');
  time[2].classList.remove('activity');
  time[3].classList.add('activity');
  time[4].classList.add('block-none');
  illumination[0].style.backgroundColor = 'white';
  illumination[1].style.backgroundColor = 'white';
  illumination[2].style.backgroundColor = 'white';
  illumination[3].style.backgroundColor = '#86FF73';
  illumination[4].style.backgroundColor = 'white';
}

function trigger__button5(){
  time[0].classList.remove('activity');
  time[0].classList.add('block-none');
  time[1].classList.remove('activity');
  time[2].classList.add('block-none');
  time[3].classList.add('block-none');
  time[4].classList.add('activity');
  time[1].classList.add('block-none');
  time[2].classList.remove('activity');
  time[3].classList.remove('activity');
  time[4].classList.remove('block-none');
  illumination[0].style.backgroundColor = 'white';
  illumination[1].style.backgroundColor = 'white';
  illumination[2].style.backgroundColor = 'white';
  illumination[3].style.backgroundColor = 'white';
  illumination[4].style.backgroundColor = '#86FF73';
}


//Дополнительное задание
var diagram_array = document.getElementsByClassName('diagram');
var buttonss_array = document.getElementsByClassName('buttonss');

function diagrammy__1(){
diagram_array[0].classList.remove('diagram-none');
diagram_array[1].classList.add('diagram-none');
diagram_array[2].classList.add('diagram-none');
buttonss_array[0].classList.add('active2');
buttonss_array[1].classList.remove('active2');
buttonss_array[2].classList.remove('active2');
}
function diagrammy__2(){
diagram_array[0].classList.add('diagram-none');
diagram_array[1].classList.remove('diagram-none');
diagram_array[2].classList.add('diagram-none');
buttonss_array[0].classList.remove('active2');
buttonss_array[1].classList.add('active2');
buttonss_array[2].classList.remove('active2');
}
function diagrammy__3(){
diagram_array[0].classList.add('diagram-none');
diagram_array[1].classList.add('diagram-none');
diagram_array[2].classList.remove('diagram-none');
buttonss_array[0].classList.remove('active2');
buttonss_array[1].classList.remove('active2');
buttonss_array[2].classList.add('active2');
}
