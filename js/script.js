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
      if (elements[i].classList.contains('activeDay')) {
        elements[i].classList.remove('activeDay');
        triggerity[i].classList.remove('activeButtons');
        if(i === elements.length-1) {
          elements[0].classList.add('activeDay');
          triggerity[0].classList.add('activeButtons');
          break;
      }
        elements[i].nextElementSibling.classList.add('activeDay');
        triggerity[i].nextElementSibling.classList.add('activeButtons');
        break;
      }
    }
}

function showPrev(){
  for (var i = 0; i < elements.length; i++) {
          if (elements[i].classList.contains('activeDay')){
            elements[i].classList.remove('activeDay');
            triggerity[i].classList.remove('activeButtons');
            if(i === 0) {
              elements[elements.length-1].classList.add('activeDay');
              triggerity[elements.length-1].classList.add('activeButtons');
              break;
          }
            elements[i].previousElementSibling.classList.add('activeDay');
            triggerity[i].previousElementSibling.classList.add('activeButtons');
            break;
          }
        }
}

function showSpecialDay(){
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('activeDay');
  }
  for (var i = 0; i < triggerity.length; i++) {
    triggerity[i].classList.remove('activeButtons');
  }
  triggerity[index].classList.add('activeButtons');
  elements[index].classList.add('activeDay');
}
