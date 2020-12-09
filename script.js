//properties...
var daysSelected = [];
var selectedItems = [];
var totalItems = 0;

//main food Images
var mainFoodImgsIDs = ['pastaMakingImg', 'soupImg', 'pastaImg'];
var mainFoodImgs = ['https://iili.io/319Y9R.md.png', 'https://iili.io/30yv3J.jpg', 'https://iili.io/31958v.md.png'];
var mainFoodDescs = ['https://iili.io/31H7fe.png', 'https://iili.io/31HY0u.png', 'https://iili.io/31HaUb.png' ];

var food_images = ['https://i.ibb.co/wWwfjR6/Screenshot-75.png', 'https://i.ibb.co/239qxwf/Screenshot-74.png', 'https://i.ibb.co/SNLmBNV/Screenshot-73.png', 'https://i.ibb.co/j3BYp8v/Screenshot-72.png', 'https://i.ibb.co/WWQ2D9J/Screenshot-71.png', 'https://i.ibb.co/jhWh5wn/Screenshot-70.png']
var food_image_index = 0;




//open side nav menu
function openMenu(){

  let fullWidth = 40;

  if(window.innerWidth < 768){
    fullWidth = 70;
  }

  document.getElementById('sideNavItems').style.display = 'none';
  document.getElementById('sideNavBar').style.display = 'block';
  document.getElementById('sideNavBar').style.width = 0;

  let width  = 0;
  var slideInInterval = setInterval(function(){
    width++;
    document.getElementById('sideNavBar').style.width = width + 'vw';
    if(width >= fullWidth) {
      clearInterval(slideInInterval);
      document.getElementById('sideNavItems').style.display = 'flex';
    }
  }, 10);
}

//close side nav menu
function closeMenu(){

  let fullWidth = 40;

  if(window.innerWidth < 768){
    fullWidth = 70;
  }

  document.getElementById('sideNavItems').style.display = 'none';
  let width  = fullWidth;
  var slideOutInterval = setInterval(function(){
    width--;
    document.getElementById('sideNavBar').style.width = width + 'vw';
    if(width <= 0) {
      clearInterval(slideOutInterval);
      document.getElementById('sideNavBar').style.display = 'none';
    }
  }, 10);
}


//on hover for header notice block
function initHeaderNotice(){
  document.getElementById('headerNotice').onmouseover = ()=>{
    document.getElementById('naturalProductsShopTxt').style.display = 'block';
    document.getElementsByTagName('header')[0].style.paddingTop = '4.5vh';
  };  
  document.getElementById('headerNotice').onmouseleave = ()=>{
    document.getElementById('naturalProductsShopTxt').style.display = 'none';
    document.getElementsByTagName('header')[0].style.paddingTop = '10vh';
  };  
}

//set on hover for main food images
function initMainFoods(){
  for(var foodId in mainFoodImgsIDs){
    let id = mainFoodImgsIDs[foodId];
    let foodImg = mainFoodImgs[foodId];
    let descImg = mainFoodDescs[foodId];

    document.getElementById(id).onmouseover = function(){
      document.getElementById(id).src = descImg;
    };

    document.getElementById(id).onmouseleave = function(){
      document.getElementById(id).src = foodImg;
    };
  }
}

//init sign up and sign in buttons
function initSigninSignupBtns(){
  document.getElementById('signupBtn').onclick=() => {
    document.getElementById('dim').style.display = 'block';
    document.getElementById('singupContainer').style.display = 'flex';
  };
  document.getElementById('signinBtn').onclick=() => {
    document.getElementById('dim').style.display = 'block';
    document.getElementById('singinContainer').style.display = 'flex';
  };


  //close sign up...
  document.getElementById('signupCloseBtn').onclick=() => {
    document.getElementById('dim').style.display = 'none';
    document.getElementById('singupContainer').style.display = 'none';
  };

}

//init carosel - swap images every few seconds
function initCarosel(){
  setInterval(function(){
    swapCaroselImg();
  }, 8000);
}

//swap carosel image - go to next image in food images list
function swapCaroselImg(){
  food_image_index++;
  if(food_image_index == food_images.length) food_image_index = 0;
  document.getElementById('chefsWorkImg').src = food_images[food_image_index];
  //fadeOut('chefsWorkImg');

  // setTimeout(function(){
  //   document.getElementById('chefsWorkImg').src = food_images[food_image_index];
  //   fadeIn('chefsWorkImg');
  // }, 1500);
}


//init oninputs for create accout
function initCreateAccountInputs(){

  //validation on inputs...
  var createAccountInputs = document.getElementsByClassName('createAccountInput');
  for(var i = 0; i < createAccountInputs.length; i++){
    createAccountInputs[i].oninput = () => {validateCreateAccountInputs()};
  }

  //password visibility btn on click
  //first pass...
  document.getElementById('passVisibilityFirst').onclick = () => {
    var firstPass = document.getElementById('pass-input');
    if(firstPass.type == 'password')
      firstPass.type = 'text';
    else firstPass.type = 'password';
  };
  //conf pass
  document.getElementById('passVisibilityConf').onclick = () => {
    var confPass = document.getElementById('pass-confirm-input');
    if(confPass.type == 'password')
      confPass.type = 'text';
    else confPass.type = 'password';
  };

}

//init on input for login...
function initLoginMenu(){
  //password visibility
  document.getElementById('loginPassVisibility').onclick = () => {
    var pass = document.getElementById('login-pass-input');
    if(pass.type == 'password')
      pass.type = 'text';
    else pass.type = 'password';
  };

  //close menu...
  document.getElementById('signinCloseBtn').onclick = () => {
    document.getElementById('singinContainer').style.display = 'none';
    document.getElementById('dim').style.display = 'none';
  };


  //check inputs before displaying login btn
  document.getElementById('login-email-input').oninput = () => {
    validateLoginMenu();
  };
  document.getElementById('login-pass-input').oninput = () => {
    validateLoginMenu();
  };


}

//validate login menu
function validateLoginMenu(){
  let loginEmail = document.getElementById('login-email-input').value;
  let loginPass = document.getElementById('login-pass-input').value;
  let infoText = '';
  let goodEmail = true;
  let goodPassword = true;

  if(loginEmail.length > 0){
    if(!(loginEmail.indexOf('@') > 0 && loginEmail.indexOf('.') > 0)){
      goodEmail = false;
      infoText = 'Invalid Email';
    }
  }
  else{
    goodEmail = false;
  }
  if(loginPass.length == 0){
    goodPassword = false;
  }

  if(goodEmail && goodPassword){
    document.getElementById('loginMenuBtnArea').style.display = 'flex';
  }
  else{
    document.getElementById('loginMenuBtnArea').style.display = 'none';
    document.getElementById('loginInputInfoText').innerHTML = infoText;
  }
}


//validate create account info...
function validateCreateAccountInputs(){

  var email_input = document.getElementById('email-input').value;
  var pass_input = document.getElementById('pass-input').value;
  var pass_confirm_input = document.getElementById('pass-confirm-input').value;

  var infoText = '';
  var goodEmail = true;
  var goodPassword = true;

  if(email_input.indexOf('@') < 0){
    infoText = 'Enter Valid Email';
    goodEmail = false;
  }
  else if(email_input.indexOf('.') < 0){
    infoText = 'Enter Valid Email';
    goodEmail = false;
  }
  else if(pass_input.length == 0 || pass_confirm_input.length == 0){
    goodPassword = false;
  }
  else if(pass_input != pass_confirm_input){
    infoText = 'Passwords Do Not Match';
    goodPassword = false;
  }


  if(goodEmail && goodPassword){ //show next button
    document.getElementById('loginBtnArea').style.display = 'block';
  }
  else{
    document.getElementById('loginBtnArea').style.display = 'none';
  }

  document.getElementById('createAccountInputInfoText').innerHTML = infoText;

}

//fade out given element - decrement opacity until 0
function fadeOut(id){
  let opacity = 1;
  var fadeOutInterval = setInterval(function(){
    opacity -= 0.01;
    if(opacity <= 0) { console.log('clear'); clearInterval(fadeOutInterval);  };
    document.getElementById(id).style.opacity = opacity;

  }, 10);
}
//fade In given element - increment opacity until 1
function fadeIn(id){
  let opacity = 0;
  var fadeInInterval = setInterval(function(){
    opacity += 0.01
    if(opacity >= 1) clearInterval(fadeInInterval);
    document.getElementById(id).style.opacity = opacity;
  }, 10);
}


//onclick for menu items... prompt checkout or keep shopping
function initMenuItemsOnClick(){
  var menuItems = document.getElementsByTagName('menuItemTxt');

  for(var i = 0; i < menuItems.length; i++){
    menuItems[i].onclick = function(){promptCheckout()};
  }

}

//prompt user to either checkout or keep shopping when an item is added to cart
function promptCheckout(){
  document.getElementById('checkoutPrompt').style.display = 'block';
  document.getElementById('dim').style.display = 'block';

  //add cart to display
  document.getElementById('cart').style.display = 'block';

  //add bottom checkout prompt
  document.getElementById('checkoutPromptBottom').style.display = 'flex';
}

//close checkout prompt
function closeCheckoutPromt(){
  document.getElementById('checkoutPrompt').style.display = 'none';
  document.getElementById('dim').style.display = 'none';
}


//show cart
function showCart(){
  document.getElementById('cart').style.display = 'block';
}

//hide cart
function hideCart(){
  document.getElementById('cart').style.display = 'none';
}

//init day of week Selection
function initDayOfWeekOnClick(){
  var daysOfWeek = document.getElementsByTagName('day');

  for(var i = 0; i < daysOfWeek.length; i++){
    let id = 'none';
    if(daysOfWeek[i].id != undefined){ //for day selectors on top... sets availality for remaining days below
      id = daysOfWeek[i].id;
    }

    daysOfWeek[i].onclick = function(){alterSelection(this, id, 'schedule')};
  }
}

//init day of week Selection for single order scheduling
function initDayOfWeekOnClickSingle(){
  var daysOfWeek = document.getElementsByTagName('day');

  for(var i = 0; i < daysOfWeek.length; i++){
    let id = 'none';
    if(daysOfWeek[i].id != undefined){ //for day selectors on top... sets availality for remaining days below
      id = daysOfWeek[i].id;
    }

    let value = daysOfWeek[i].value;
    daysOfWeek[i].onclick = function(){alterSelection(this, id, 'single')};
  }
}

//onclick for item days...
function countItemsSelected(){

  var mons = document.getElementsByClassName('mon');
  var weds = document.getElementsByClassName('wed');
  var fris = document.getElementsByClassName('fri');

  totalItems = 0;

  for(var mon in mons){
    if(mons[mon].classList !== undefined){
      for(var i = 0; i < mons[mon].classList.length; i++){
        if(mons[mon].classList[i] == "selected"){
          totalItems++;
        }
      }
    }
  }
  for(var wed in weds){
    if(weds[wed].classList !== undefined){
      for(var i = 0; i < weds[wed].classList.length; i++){
        if(weds[wed].classList[i] == "selected"){
          totalItems++;
        }
      }
    }
  }
  for(var fri in fris){
    if(fris[fri].classList !== undefined){
      for(var i = 0; i < fris[fri].classList.length; i++){
        if(fris[fri].classList[i] == "selected"){
          totalItems++;
        }
      }
    }
  }


  if(totalItems > 0) {showCart(); showBottomCheckoutPrompt();}
  else {hideCart(); hideBottomCheckoutPrompt();}

}

//show checkout prompt on bottom
function showBottomCheckoutPrompt(){
  document.getElementById('checkoutPromptBottom').style.display = 'flex';
}

//hide checkout prompt on bottom
function hideBottomCheckoutPrompt(){
  document.getElementById('checkoutPromptBottom').style.display = 'none';
}

//alter selected or deselected for days of week
function alterSelection(element, id, type){


  var isSelected = false;
  for(var i = 0; i < element.classList.length; i++){
    if(element.classList[i] == "selected"){
      element.classList.remove("selected");
      isSelected = true;
    }
  }

  let correspondingDayID = id;
  if(!isSelected){

      //if single order... unselect other days
      if(type == 'single'){

        //show btns
        document.getElementById('singleOrderScheduleBtns').style.display = 'flex';

        //show day selected in text
        updateDaySelectedText(id);
        updateReviewDaySelectors(id);
        document.getElementById('scheduleDaySelectionText').style.display = 'block';



        var daysOfWeek = document.getElementsByTagName('day');

        for(var i = 0; i < daysOfWeek.length; i++){
          let id = 'none';
          if(daysOfWeek[i].id != undefined){ 
            daysOfWeek[i].classList.remove("selected")
          }
        }

        correspondingDayID += 'Review';
      }

      //add selected to element
      element.classList.add("selected");

      //add selected to corresponding day in review section
      try{
        document.getElementById(correspondingDayID).classList.add('selected');
      }
      catch{}

  }

  


  if(type != 'schedule') return; //stop here unless using for schedule order page

  //check for modifying day availality @ top
  if(id != 'none'){
    let day = id.substring(11); //11th char in id is the day of week

    if(isDay(day) && daysSelected.indexOf(day) > -1){
      daysSelected.splice(daysSelected.indexOf(day), 1);
    }
    else if(isDay(day)) daysSelected.push(day);
  }

  if(daysSelected.length == 0){
    //hide item selections
    document.getElementById("pastaSelections").style.display = 'none';
    document.getElementById("soupSelections").style.display = 'none';
    document.getElementById("specialSelections").style.display = 'none';

    //deselect all...
    deslectDays();
  }
  else{


    //show item selections
    document.getElementById("pastaSelections").style.display = 'flex';
    document.getElementById("soupSelections").style.display = 'flex';
    document.getElementById("specialSelections").style.display = 'flex';



    //add in day selections next to each item...
    addInDaySelections();

    //show cart?
    countItemsSelected();
  }



}

let dayOfWeekSelected;
function updateReviewDaySelectors(id){
  if(id.substring(id.indexOf('-')-3,id.indexOf('-')-2) == "M"){
    console.log(document.getElementsByClassName('reviewDaySelectorMon')[0])
    document.getElementsByClassName('reviewDaySelectorMon')[0].classList.add('selected');
    dayOfWeekSelected = 'Monday';
  }
  else if(id.substring(id.indexOf('-')-3,id.indexOf('-')-2) == "W"){
    document.getElementsByClassName('reviewDaySelectorWed')[0].classList.add('selected');
    dayOfWeekSelected = 'Wednesday';
  }
  else if(id.substring(id.indexOf('-')-3,id.indexOf('-')-2) == "F"){
    document.getElementsByClassName('reviewDaySelectorFri')[0].classList.add('selected');
    dayOfWeekSelected = 'Friday';
  }
  console.log(id.substring(id.indexOf('-')-3,id.indexOf('-')-2))
}

function updateDaySelectedText(id){
  //use id to get day and date
  let info = id.substring(id.indexOf('-')-3);

  let date = info.substring(1);

  let day = info.charAt(0);

  let dateTxt = getDateInText(date, day);

  //set text in html
  document.getElementById('scheduleDaySelectionText').innerHTML = "You've Selected: " + dateTxt;
  document.getElementById('detailsShippingDayTxt').innerHTML = 'Shipping On: ' + dateTxt;
  document.getElementById('reviewOrderScheduleTxt').innerHTML = 'Shipping On: ' + dateTxt;

}

const getDateInText = ( (date, day) => {
  let month = date.substring(0, date.indexOf('-'));
  let monthTxt;
  if(month == '1') monthTxt = 'January';
  else if(month == '2') monthTxt = 'Febuary';
  else if(month == '3') monthTxt = 'March';
  else if(month == '4') monthTxt = 'April';
  else if(month == '5') monthTxt = 'May';
  else if(month == '6') monthTxt = 'June';
  else if(month == '7') monthTxt = 'July';
  else if(month == '8') monthTxt = 'August';
  else if(month == '9') monthTxt = 'September';
  else if(month == '10') monthTxt = 'October';
  else if(month == '11') monthTxt = 'November';
  else if(month == '12') monthTxt = 'December';

  let dayPostfix = 'th'; //eg. 4th, 5th, ...
  let dayTxt = date.substring(date.indexOf('-')+1);
  if(dayTxt == '1') dayPostfix = 'st';
  else if(dayTxt == '2') dayPostfix = 'nd';
  else if(dayTxt == '3') dayPostfix = 'rd';

  let dayOfWeekTxt;
  if(day == 'M') dayOfWeekTxt = 'Monday, ';
  else if(day == 'W') dayOfWeekTxt = 'Wednesday, ';
  else if(day == 'F') dayOfWeekTxt = 'Friday, ';



  return dayOfWeekTxt + ' ' +  monthTxt + ' ' + dayTxt + dayPostfix;
});

//check if M W or f
function isDay(day){
  let days = ['M', 'W', 'F'];
  let match = false;
  for( var i = 0; i < days.length; i++){
    if(days[i] == day) match = true;
  }

  return match;
}

//add in day selections next to each item...
function addInDaySelections(){
  //modays
  addInDaySelection('mon', 'M');
  //Wednesdays
  addInDaySelection('wed', 'W');
  //fridays
  addInDaySelection('fri', 'F');
}

//deselect all day options
function deslectDays(){
  deselectDay('mon');
  deselectDay('wed');
  deselectDay('fri');

  hideCart();
}

function deselectDay(day){
  var days = document.getElementsByClassName(day);
  for(var i = 0; i < days.length; i++){
    if(days[i].classList != undefined){
          days[i].classList.remove("selected");
    }
  }
}

//given a day, add or remove it from options
function addInDaySelection(day, d){
  if(daysSelected.indexOf(d) > -1)
  {
    var dayBtns = document.getElementsByClassName(day);
    for(var i = 0; i < dayBtns.length; i++){
      dayBtns[i].style.display = 'flex';
    }
  }
  else
  {
    var dayBtns = document.getElementsByClassName(day);
    for(var i = 0; i < dayBtns.length; i++){
      dayBtns[i].style.display = 'none';
    }
  }
}



//initialize cart checkout functions... hover / remove
function initCartItemsFunctions(){
  //get list of item removers
  let itemRemovers = document.getElementsByClassName('removeItemIcon');

  //OLD - Changin to just strike thru on click...
  /* Attach functions to removers
     Hover - red strike thru on corresponding item
     Click - remove corresponding item */

  for(var i = 0; i < itemRemovers.length; i++){

    //store corresponding cart item
    let cartItemTxtID = itemRemovers[i].id.substring(0, itemRemovers[i].id.indexOf('Remover')) + "Txt";
    let cartItemTxt = document.getElementById(cartItemTxtID);

    //store corresponding cart item area (includes txt and cancel btn)
    let cartItemArea = document.getElementById(itemRemovers[i].id.substring(0, itemRemovers[i].id.indexOf('Remover')));


    //add hover event
    // itemRemovers[i].onmouseover = () => {
    //   cartItemTxt.style.textDecoration = "line-through";
    //   cartItemTxt.style.textDecorationColor = "red";
    // };
    // itemRemovers[i].onmouseleave = () => {
    //   cartItemTxt.style.textDecoration = "none";
    // };

    //store html info
    let status = itemRemovers[i].innerHTML.trim();
    let id = itemRemovers[i].id;

    //add click event
    itemRemovers[i].onclick = () => {
      
      //change cancel btn to undo
      alterUndoCancel(id, cartItemTxtID);

      
    };




  }
}

function alterUndoCancel(id, txtID){
  let status = document.getElementById(id).innerHTML.trim();
  let cartItemTxt = document.getElementById(txtID);
  if(status == 'cancel'){

    cartItemTxt.style.textDecoration = "line-through";
    cartItemTxt.style.textDecorationColor = "red";
    cancelToUndo(id);
  }
  else {
     cartItemTxt.style.textDecoration = "none";
     undoToCancel(id);
  }
}

function cancelToUndo(id){  
  let item = document.getElementById(id);

  item.innerHTML = 'undo';
  item.style.color = 'green';

}

function undoToCancel(id){  
  let item = document.getElementById(id);

  item.innerHTML = 'cancel';
  item.style.color = 'red';

}

//init onclick for review cart items
function initReviewCartItemRemove(){
  //get list of item removers
  let itemRemovers = document.getElementsByClassName('removeItemIconSmall');

  //OLD....
  /* Attach functions to removers
     Hover - red strike thru on corresponding item
     Click - remove corresponding item */
  //...CHANGING TO JUST STRIKE THRU ONCLICK... NO REMOVE

  for(var i = 0; i < itemRemovers.length; i++){

    //store corresponding cart item
    let cartItemTxtID = itemRemovers[i].id.substring(0, itemRemovers[i].id.indexOf('Remover')) + "Txt";
    let cartItemTxt = document.getElementById(cartItemTxtID);

    //store corresponding cart item area (includes txt and cancel btn)
    let cartItemArea = document.getElementById(itemRemovers[i].id.substring(0, itemRemovers[i].id.indexOf('Remover')));

    //OLD...
    //add hover event
    // itemRemovers[i].onmouseover = () => {
    //   cartItemTxt.style.textDecoration = "line-through";
    //   cartItemTxt.style.textDecorationColor = "red";
    // };
    // itemRemovers[i].onmouseleave = () => {
    //   cartItemTxt.style.textDecoration = "none";
    // };

    //add click event
    itemRemovers[i].onclick = () => {
      cartItemTxt.style.textDecoration = "line-through";
      cartItemTxt.style.textDecorationColor = "red";

      //change remover btn to undo
    };




  }
}

//review user info on click.... change clicked element to input field + cancel/confirm btns
function initReviewUserInfoOnClick(){

  //get review text elements
  let reviewUserInfoTxtElements = document.getElementsByClassName('reviewUserInputTxt');


  //for each text element, add on click to switch to input form
  for(var i = 0; i < reviewUserInfoTxtElements.length; i++){
    let txtElemID = reviewUserInfoTxtElements[i].id;
    reviewUserInfoTxtElements[i].onclick = () => {editUserInputReview(txtElemID)};
  }

  //get confirm btns
  let confirmBtns = document.getElementsByClassName('confirmBtn');

  for(var i = 0; i < confirmBtns.length; i++){
    let confirmBtnID = confirmBtns[i].id;
    confirmBtns[i].onclick = () => {confirmReviewUserInput(confirmBtnID)};
  }

  //get cancel btns
  let cancelBtns = document.getElementsByClassName('cancelBtn');

  for(var i = 0; i < cancelBtns.length; i++){
    let cancelBtnID = cancelBtns[i].id;
    cancelBtns[i].onclick = () => {cancelReviewUserInput(cancelBtnID)};
  }

}

/*/init review billing info ... conf/cancel btns
function initReviewBillingInfoOnClick(){
  //get text elements
  let reviewBillingTextElements = document.getElementsByClassName("reviewBillingInputTxt");


  //onclick for text elems... switch to input form
  for(var i = 0; i < reviewBillingTextElements.length; i++){
    let reviewBillingElementID = reviewBillingInputTxt[i].id; 
    reviewBillingInputTxt[i].onclick = () => {editBillingInfoReview(reviewBillingElementID)};    
  }



} */

//confirm review user input change
function confirmReviewUserInput(id){
  revertUserInputReview();
}

//cancel user review input change...
function cancelReviewUserInput(id){
  revertUserInputReview();
}

//revert user input in review
//collapse inputs and  add back in txt
function revertUserInputReview(){
  //get review text elements
  let reviewUserInfoTxtElements = document.getElementsByClassName('reviewUserInputTxt');

  //get review input elements
  let reviewUserInfoInputElements = document.getElementsByClassName('reviewUserInfoInput');

  //get cancel/confirm btns
  let reviewUserInfoBtns = document.getElementsByTagName('dualBtn');



  for(var i = 0; i < reviewUserInfoTxtElements.length; i++){
    reviewUserInfoTxtElements[i].style.display = 'block';
    reviewUserInfoInputElements[i].style.display = 'none';
    reviewUserInfoBtns[i].style.opacity = 0;
  }

}

//switch user info reveiew elememt to input form
function editUserInputReview(id){

  //revert open inputs first
  revertUserInputReview();

  //remove text element
  document.getElementById(id).style.display = "none";

  //add in input field
  document.getElementById(id.substring(0, id.indexOf('Txt')) + "Input").style.display = 'block';

  //add in conf/cancel btns
  document.getElementById(id.substring(0, id.indexOf('Txt')) + "Btns").style.opacity = 1;
}

//init on click for billing items - only one selected at a time - has seleceted class
function initBillingOptionOnClick(){

  //billing option elements...
  let billingOptions = document.getElementsByClassName('billingOption');

  for(var i=0; i < billingOptions.length; i++){
    let elementID = billingOptions[i].id;
    billingOptions[i].onclick = () => {alterBillingSelection(elementID)};
  }

}

//make sure only one billing option is selected....
function alterBillingSelection(selectedElementID){

  //clear selection class from each billing option
  let billingOptions = document.getElementsByClassName('billingOption');

  for(var i=0; i < billingOptions.length; i++){
    billingOptions[i].classList.remove("selected");
  }

  //set selected for given element
  let selectedElement = document.getElementById(selectedElementID);
  selectedElement.classList.add("selected");

  //select corresponding element in review section
  let correspondingPaymentID = '';
  if(selectedElementID.indexOf('Review') == -1){
    correspondingPaymentID = selectedElementID + 'Review';
  }
  else{
    correspondingPaymentID = selectedElementID.substring(0, selectedElementID.indexOf('Review'));
  }
  document.getElementById(correspondingPaymentID).classList.add("selected");


}

//init schedule orders - select weeks on click
function initWeeksSchedulingChecks(){
  //only allow one to be checked

  //get week checks
  let weekCheckboxes = document.getElementsByClassName('scheduleWeeksCheckboxes');
  let weekCheckboxesFreq = document.getElementsByClassName('scheduleWeeksCheckboxesFreq');

  //get week txt options
  let weekText = document.getElementsByClassName('scheduleWeeksText');
  let weekTexFreq = document.getElementsByClassName('scheduleWeeksTextFreq');


  for(var i = 0; i < weekCheckboxes.length; i++){
    let elementID = weekCheckboxes[i].id;

    weekCheckboxes[i].onclick = () => {alterScheduleWeeksSelection(elementID)};
    weekText[i].onclick = () => {alterScheduleWeeksSelection(elementID)};
  }

  for(var i = 0; i < weekCheckboxesFreq.length; i++){
    let elementID = weekCheckboxesFreq[i].id;
    weekCheckboxesFreq[i].onclick = () => {alterScheduleWeeksFreqSelection(elementID)};
    weekTexFreq[i].onclick = () => {alterScheduleWeeksFreqSelection(elementID)};
  }

} 


//show custom week selection input
function showCustomWeekSelection(){
  document.getElementById('customWeeksInputArea').style.display = 'flex';

}

//hide custom week selection input
function hideCustomWeekSelection(){
  document.getElementById('customWeeksInputArea').style.display = 'none';
}


//alter schedule orders # of weeks selection
function alterScheduleWeeksSelection(id){

  if(id.indexOf('custom') > -1) {showCustomWeekSelection(); }
  else hideCustomWeekSelection();


  //revert week selection checks
  revertScheduleOrdersWeeks();

  //set given elem to checked
  document.getElementById(id).checked = true;

}

//alter schedule orders # of weeks selection
function alterScheduleWeeksFreqSelection(id){

  //revert week selection checks
  revertScheduleOrdersWeeksFreq();

  //set given elem to checked
  document.getElementById(id).checked = true;

}

//set all week selections to unchecked
function revertScheduleOrdersWeeks(){
  let weekCheckboxes = document.getElementsByClassName('scheduleWeeksCheckboxes');

  for(var i = 0; i < weekCheckboxes.length; i++){
    weekCheckboxes[i].checked = false;
  }

}
function revertScheduleOrdersWeeksFreq(){
  let weekCheckboxes = document.getElementsByClassName('scheduleWeeksCheckboxesFreq');

  for(var i = 0; i < weekCheckboxes.length; i++){
    weekCheckboxes[i].checked = false;
  }

}


//init input for custom # of weeks
function initCustomWeeksInput(){
  let customWeekInput = document.getElementById('customWeeksInput');
  let customWeekCheck = document.getElementById('customWeekInputCheck');
  customWeekInput.oninput = () => {customWeekCheck.style.display = 'block'};
}



//init schedule item days review
function initScheduleItemDaysReview(){
  //get day review elems
  let dayReviewSelections = document.getElementsByTagName('dayReview');

  for(var i = 0; i < dayReviewSelections.length; i++){
    let element = dayReviewSelections[i];
    dayReviewSelections[i].onclick = () => {alterDayReviewSelection(element)};
  }
}

//alter selected for day item review
function alterDayReviewSelection(element){
  if(element.classList.contains('selected'))
    element.classList.remove('selected');
  else element.classList.add('selected');
}

// review create account checkbox onclick
function initReviewCreateAccountCheckbox(){
  document.getElementById('sceduleReviewYourInfoCreateAccount').onclick = () => {
    alterPasswordInputArea(document.getElementById('sceduleReviewYourInfoCreateAccount').checked);
  };
}

//alter password input area 
function alterPasswordInputArea(checked){
  if(checked)
    document.getElementById('reviewPasswordArea').style.display = 'flex';
  else{
    document.getElementById('reviewPasswordArea').style.display = 'none';
    document.getElementById('scheduleReviewCreateAccountConfirm').style.display = 'none'; 
    document.getElementById('scheduleReviewPasswordInfo').style.display = 'none';
  }

}

//init review password input for schedule orders review
function initReviewPasswordInput(){
  let confirmInput = document.getElementById('reviewCreateAccountPasswordConfirm');
  confirmInput.oninput = () => {
    //check passwords
    let password = document.getElementById('reviewCreateAccountPassword').value;
    let confirmPassword = document.getElementById('reviewCreateAccountPasswordConfirm').value;
    if(checkPasswords(password, confirmPassword)){
      document.getElementById('scheduleReviewCreateAccountConfirm').style.display = 'block'; 
      document.getElementById('scheduleReviewPasswordInfo').style.display = 'none';
    }
    else{
      document.getElementById('scheduleReviewPasswordInfo').style.display = 'block';
      document.getElementById('scheduleReviewCreateAccountConfirm').style.display = 'none'; 
    }
  };
}

//check passwords
function checkPasswords(pass, confPass){
  return pass == confPass && pass.length > 5;
}



