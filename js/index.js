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
    diagram_array[i].classList.remove('activeBlockDiagram');
  }
  for (var i = 0; i < buttonss_array.length; i++) {
    buttonss_array[i].classList.remove('activeButtonDiagram');
  }
  diagram_array[index].classList.add('activeBlockDiagram');
  buttonss_array[index].classList.add('activeButtonDiagram');
}
