//admin js file

//init hide/show toggles for orders
function initOrderToggles(){
  let toggles = document.getElementsByTagName('orderToggleContainer');

  for(var i = 0; i < toggles.length; i++){
    let id = toggles[i].id;
    toggles[i].onclick = () =>{toggleOrderInfo(id)};
  }
}

//toggle order info hide/show
function toggleOrderInfo(id){

  let infoID = id.substring(0, id.indexOf('Toggle')) + 'Info';
  let orderInfoElement = document.getElementById(infoID);

  if(orderInfoElement.style.display == 'none') {
    expandOrder(id)
  }
  else {
    collapseOrder(id);
  }
}

//toggle all order on given day... monday, Wednesday, or friday
function toggleOrdersByDay(Day){
  let orderList = document.getElementById('orderList' + Day);
  let upToggle = document.getElementById('orderHeader' + Day + 'DropUp');
  let downToggle = document.getElementById('orderHeader' + Day + 'DropDown');


  if(orderList.style.display == 'none'){
    orderList.style.display = 'block';
    upToggle.style.display = 'none';
    downToggle.style.display = 'block';
  }
  else{
    upToggle.style.display = 'block';
    downToggle.style.display = 'none';
    orderList.style.display = 'none';
  }
}

//collapse order info - given toggle id
function collapseOrder(id){
  let infoID = id.substring(0, id.indexOf('Toggle')) + 'Info';
  let orderInfoElement = document.getElementById(infoID);
  let toggleUp = document.getElementById(id + 'Up');
  let toggleDown = document.getElementById(id + 'Down');

  orderInfoElement.style.display = 'none';
  toggleUp.style.display = 'none';
  toggleDown.style.display = 'block';
}

//expand order info - given toggle id
function expandOrder(id){
  let infoID = id.substring(0, id.indexOf('Toggle')) + 'Info';
  let orderInfoElement = document.getElementById(infoID);
  let toggleUp = document.getElementById(id + 'Up');
  let toggleDown = document.getElementById(id + 'Down');

  orderInfoElement.style.display = 'block';
  toggleUp.style.display = 'block';
  toggleDown.style.display = 'none';
}
