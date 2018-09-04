var elements = document.getElementsByClassName('time-of-day-temperature');
var  wetherbetter = document.getElementById('weatherbox');
var triggerity = document.getElementsByClassName('trigger-button');
var diagram_array = document.getElementsByClassName('diagram');
var buttonss_array = document.getElementsByClassName('buttonss');
wetherbetter.addEventListener('click', function(event){
    if(event.target.classList.contains('clicked-next')){
      showNext();
    }
    else if(event.target.classList.contains('clicked-back')){
      showPrev();
    }
    else if(event.target.classList.contains('trigger-button')){
      index = parseInt(event.target.dataset.btnindex);
      showSpecialDay(index);
    }
})

function showNext(){
for (var i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('activity')) {
        elements[i].classList.remove('activity');
        triggerity[i].classList.remove('activus');
        if(i === elements.length-1) {
          elements[0].classList.add('activity');
          triggerity[0].classList.add('activus');
      }
        elements[i].nextElementSibling.classList.add('activity');
        triggerity[i].nextElementSibling.classList.add('activus');
        break;
      }
    }
}

function showPrev(){
  for (var i = 0; i < elements.length; i++) {
          if (elements[i].classList.contains('activity')){
            elements[i].classList.remove('activity');
            triggerity[i].classList.remove('activus');
            if(i === 0) {
              elements[elements.length-1].classList.add('activity');
              triggerity[elements.length-1].classList.add('activus');
          }
            elements[i].previousElementSibling.classList.add('activity');
            triggerity[i].previousElementSibling.classList.add('activus');
            break;
          }
        }
}

function showSpecialDay(){
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('activity');
  }
  for (var i = 0; i < triggerity.length; i++) {
    triggerity[i].classList.remove('activus');
  }
  if(index == 0 ){
    triggerity[0].classList.add('activus');
    elements[0].classList.add('activity');
  }
  else if(index == 1){
    triggerity[1].classList.add('activus');
    elements[1].classList.add('activity');
  }
  else if(index == 2){
    triggerity[2].classList.add('activus');
    elements[2].classList.add('activity');
  }
  else if(index == 3){
    triggerity[3].classList.add('activus');
    elements[3].classList.add('activity');
  }
  else if(index == 4){
    triggerity[4].classList.add('activus');
    elements[4].classList.add('activity');
  }
  }
