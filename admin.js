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


/*
  menu editing on clicks... show/hide input area
*/
function initMenuEditing(){

  //get checks/confirm btns to finish edit
  let checks = document.getElementsByClassName('inputConfirmBtn');
  for(var i = 0; i < checks.length; i++){
    let id = checks[i].id;
    checks[i].onclick = () => { confirmEdit(id); };
  }

  //get menu item titles
  let titles = document.getElementsByClassName('menuItemAdmin');
  for(var i = 0; i < titles.length; i++){
    let id = titles[i].id;
    titles[i].onclick = () => {editTitle(id)};
  }

  //get price text
  let prices = document.getElementsByClassName('menuPriceAdmin');
  for(var i = 0; i < prices.length; i++){
    let id = prices[i].id;
    prices[i].onclick = () => {editPrice(id)};
  }

  //get price text
  let descs = document.getElementsByClassName('menuDescAdmin');
  for(var i = 0; i < descs.length; i++){
    let id = descs[i].id;
    descs[i].onclick = () => {editDesc(id)};
  }


}

//edit Desc - show price input
function editDesc(id){
  document.getElementById(id).style.display = 'none';//hide text
  document.getElementById(id + 'InputArea').style.display = 'flex';//show input
}

//edit price - show price input
function editPrice(id){
  document.getElementById(id).style.display = 'none';//hide text
  document.getElementById(id + 'InputArea').style.display = 'flex';//show input
}

//edit title of menu item - show input and hide text
function editTitle(id){
  document.getElementById(id).style.display = 'none';//hide text
  document.getElementById(id + 'InputArea').style.display = 'flex';//show input
}

//confirm title edit - change title and hide input area
function confirmEdit(id){
  id = id.substring(0, id.indexOf('Input'));
  document.getElementById(id + 'InputArea').style.display = 'none';//hide input
  document.getElementById(id).style.display = 'flex';//show title
}


// show menu item removers
function showMenuItemRemovers(){
  //get remover areas
  let removers = document.getElementsByClassName('removerArea');
  for(var i = 0; i < removers.length; i++){
    removers[i].style.display = 'flex';
  }

  document.getElementById('showMenuRemoversBtn').style.display = 'none';
  document.getElementById('hideMenuRemoversBtn').style.display = 'block';

}

// hide menu item removers
function hideMenuItemRemovers(){
  //get remover areas
  let removers = document.getElementsByClassName('removerArea');
  for(var i = 0; i < removers.length; i++){
    removers[i].style.display = 'none';
  }

  document.getElementById('hideMenuRemoversBtn').style.display = 'none';
  document.getElementById('showMenuRemoversBtn').style.display = 'block';
}

//menu item remover onclick...
function initMenuItemRemovers(){
  //get itemRemovers
  let removers = document.getElementsByClassName('itemRemover');
  for(var i = 0; i < removers.length; i++){
    let id = removers[i].id;
    removers[i].onclick = () => { promptRemoveItem(id)};
  }

  //get cancel Btns
  let cancelBtns = document.getElementsByClassName('removeConfirmCancel');
  for(var i = 0; i < cancelBtns.length; i++){
    let id = cancelBtns[i].id;
    cancelBtns[i].onclick = () => { cancelRemoveItem(id)};
  }
}

//prompt remove item...
function promptRemoveItem(id){

  //show prompt
  document.getElementById(id.substring(0, id.indexOf('Remover')) + 'RemoveConfirmer').style.display = 'flex';

  //hide item info
  document.getElementById(id.substring(0, id.indexOf('Remover')) + 'Info').style.display = 'none';

}

//cancel remove item...
function cancelRemoveItem(id){

  //hide prompt
  document.getElementById(id.substring(0, id.indexOf('Remove')) + 'RemoveConfirmer').style.display = 'none';

  //show item info
  document.getElementById(id.substring(0, id.indexOf('Remove')) + 'Info').style.display = 'block';

}

//open add menu item prompt
function addMenuItem(){
  document.getElementById('addMenuItemFormArea').style.display = 'flex';
  document.getElementById('dim').style.display = 'block';
}

//cancel add menu item - close popup
function cancelAddMenuItem(){
  document.getElementById('addMenuItemFormArea').style.display = 'none';
  document.getElementById('dim').style.display = 'none';
}


//update add item fields - show only appropriate input fields
function updateAddItemFields(){
  let inputType = document.getElementById('addItemFieldTypeSelect').value;
  console.log(inputType)

  if(inputType == 'soup'){
    document.getElementById('addItemPriceTxt').style.display = 'none';
    document.getElementById('addItemPriceInput').style.display = 'none';

    document.getElementById('addItemPriceHalfTxt').style.display = 'flex';
    document.getElementById('addItemPriceHalfInput').style.display = 'flex';

    document.getElementById('addItemPriceFullTxt').style.display = 'flex';
    document.getElementById('addItemPriceFullInput').style.display = 'flex';
  }
  else{
    document.getElementById('addItemPriceTxt').style.display = 'flex';
    document.getElementById('addItemPriceInput').style.display = 'flex';

    document.getElementById('addItemPriceHalfTxt').style.display = 'none';
    document.getElementById('addItemPriceHalfInput').style.display = 'none';

    document.getElementById('addItemPriceFullTxt').style.display = 'none';
    document.getElementById('addItemPriceFullInput').style.display = 'none';
  }

}

//check to see if all add item input elements have a value
function checkAddItemInputs(){

  var inputs = document.getElementsByClassName('addItemInputElement');

  for(var i = 0; i < inputs.length; i++){
    if(inputs[i].value === "") return;
  }

  document.getElementById('addItemAddBtn').style.display = 'block';
}
