//Дополнительное задание
var diagram_array = document.getElementsByClassName('diagram');
var buttonss_array = document.getElementsByClassName('buttonss');
var mainInfoTable = document.getElementById('main-buttons');

mainInfoTable.addEventListener('click', function(event){
    if(event.target.classList.contains('buttonss')){
      index = parseInt(event.target.dataset.btnindex);
      showMainInfo(index);
    }
})

function showMainInfo() {
  for (var i = 0; i < diagram_array.length; i++) {
    diagram_array[i].classList.remove('active1');
  }
  for (var i = 0; i < buttonss_array.length; i++) {
    buttonss_array[i].classList.remove('active2');
  }
  if(index == 0){
    diagram_array[0].classList.add('active1');
    buttonss_array[0].classList.add('active2');
  }
  else if(index == 1){
    diagram_array[1].classList.add('active1');
    buttonss_array[1].classList.add('active2');
  }
  else if(index == 2){
    diagram_array[2].classList.add('active1');
    buttonss_array[2].classList.add('active2');
  }
}
