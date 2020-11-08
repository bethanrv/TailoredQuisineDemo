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

    daysOfWeek[i].onclick = function(){alterSelection(this, id)};
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

  if(totalItems > 0) showCart();
  else hideCart();

}

//alter selected or deselected for days of week
function alterSelection(element, id){


  var isSelected = false;
  for(var i = 0; i < element.classList.length; i++){
    if(element.classList[i] == "selected"){
      element.classList.remove("selected");
      isSelected = true;
    }
  }
  if(!isSelected)
      element.classList.add("selected");



  //check for modifying day availality @ top
  if(id != 'none'){
    let day = id.substring(11); //11th char in id is the day

    if(isDay(day) && daysSelected.indexOf(day) > -1){
      daysSelected.splice(daysSelected.indexOf(day), 1);
    }
    else if(isDay(day)) daysSelected.push(day);
  }

  if(daysSelected.length == 0){
    //hide item selections
    document.getElementById("pastaSelections").style.display = 'none';
    document.getElementById("soupSelections").style.display = 'none';
    //deselect all...
    deslectDays();
  }
  else{
    //show item selections
    document.getElementById("pastaSelections").style.display = 'flex';
    document.getElementById("soupSelections").style.display = 'flex';

    //add in day selections next to each item...
    addInDaySelections();

    //show cart?
    countItemsSelected();
  }



}

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
