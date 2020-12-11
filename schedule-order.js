//schedule order go to checkout
function navigateToCheckout(){

  //fade out schedule order header, day selector, menu, cart, and checkout prompt

  //header...
  document.getElementById('scheduledHeaderArea').style.display = 'none';

  //day selector...
  document.getElementById('scheduledDaySelectorArea').style.display = 'none';

  //menu
  document.getElementById('soupSelections').style.display = 'none';
  document.getElementById('pastaSelections').style.display = 'none';
   document.getElementById('specialSelections').style.display = 'none';

  //checkout prompt
  closeCheckoutPromt();

  //cart
  hideCart();

  //hide checkout prompt on bottom
  hideBottomCheckoutPrompt();

  //scroll to top
  window.scrollTo(0,0);

  //fade in checkout areas
  //header
  document.getElementById('checkoutHeader').style.display = 'flex';

  //sheduler
  document.getElementById('checkoutScheduleDeliveries').style.display = 'flex';

  //item review
  // document.getElementById('checkoutItemsReview').style.display = 'flex';

  //user info
  // document.getElementById('checkoutUserInfo').style.display = 'flex';

  //billing info
  // document.getElementById('checkoutBillingInfo').style.display = 'flex';

  //review
  // document.getElementById('checkoutReview').style.display = 'flex';

  //details
  // document.getElementById('checkoutOrderDetails').style.display = 'flex';

}


//confirm order.. navigate to order details
function confirmOrder(){

  var animationTotalTime = 3500;
  var textTransitionTime = 1500;

  //show loading animation pop up
  document.getElementById('loadingAnimationArea').style.display = 'flex';
  document.getElementById('dim').style.display = 'block';

  setTimeout(function() {
    // //hide animation
    document.getElementById('loadingAnimationHeader').innerHTML = "Order Sent";
    document.getElementById('loadingAnimationText').innerHTML = "Thank You For Shopping With Us!";

  }, textTransitionTime);


  setTimeout(function() {
    // //hide animation
    document.getElementById('loadingAnimationArea').style.display = 'none';
    document.getElementById('dim').style.display = 'none';

  }, animationTotalTime);
  
  document.getElementById('checkoutReview').style.display = 'none';
  document.getElementById('checkoutOrderDetails').style.display = 'flex';
}


//navigate to review order
function navigateToReviewOrder(){
  document.getElementById('checkoutBillingInfo').style.display = 'none';
  document.getElementById('checkoutReview').style.display = 'flex';
}

//navigate back to billing info
function navigateBackToBillingInput(){
  document.getElementById('checkoutReview').style.display = 'none';
  document.getElementById('checkoutBillingInfo').style.display = 'flex';
}


//navigate to billing info
function navigateToBillingInput(){
  document.getElementById('checkoutUserInfo').style.display = 'none';
  document.getElementById('checkoutBillingInfo').style.display = 'flex';
}

//navigate back to user info
function navigateBackToUserInfo(){
  document.getElementById('checkoutUserInfo').style.display = 'flex';
  document.getElementById('checkoutBillingInfo').style.display = 'none';
}

//navigate to scheduled orders item reiew
function navigateCheckoutItemsReview(){

  document.getElementById('checkoutScheduleDeliveries').style.display = 'none';
  document.getElementById('checkoutItemsReview').style.display = 'flex';
}

//navigate back to schedule weeks
function navigateBackToDurationSchedule(){
  document.getElementById('checkoutScheduleDeliveries').style.display = 'flex';
  document.getElementById('checkoutItemsReview').style.display = 'none';
}

//navigate to user info input
function navigateToUserInfoInut(){
  document.getElementById('checkoutItemsReview').style.display = 'none';
  document.getElementById('checkoutUserInfo').style.display = 'flex';
}

//navigate back to items area
function navigateBackToItemsReview(){
  document.getElementById('checkoutUserInfo').style.display = 'none';
  document.getElementById('checkoutItemsReview').style.display = 'flex';
}

//navigate back to menu 
function navigateBackToMenuItems(){

  fadeOutCheckout();

  //scroll to top
  window.scrollTo(0,0);

  //fade in schedule order header, day selector, menu, cart, and checkout prompt

  //header...
  document.getElementById('scheduledHeaderArea').style.display = 'block';

  //day selector...
  document.getElementById('scheduledDaySelectorArea').style.display = 'flex';

  //menu
  document.getElementById('soupSelections').style.display = 'flex';
  document.getElementById('pastaSelections').style.display = 'flex';
  document.getElementById('specialSelections').style.display = 'flex';


  showCart();
  showBottomCheckoutPrompt();

}

//fade out checkout areas
function fadeOutCheckout(){
  //fade out checkout areas
  //header
  document.getElementById('checkoutHeader').style.display = 'none';

  //sheduler
  document.getElementById('checkoutScheduleDeliveries').style.display = 'none';

  //item review
  document.getElementById('checkoutItemsReview').style.display = 'none';

  //user info
  document.getElementById('checkoutUserInfo').style.display = 'none';

  //billing info
  document.getElementById('checkoutBillingInfo').style.display = 'none';

  //review
  document.getElementById('checkoutReview').style.display = 'none';

  //details
  document.getElementById('checkoutOrderDetails').style.display = 'none';
}

//onclick for menu item titles -select all days for that item 
function initMenuItemTitleOnclick(){

  //get all title elements...
  let titleElements = document.getElementsByTagName('menuItemTitle');

  //add onclick for each... select all days in corresponding day selector
  for(var i = 0; i < titleElements.length; i++){
    let titleID = titleElements[i].id;
    titleElements[i].onclick = () => {selectAllDaysForItem(titleID), promptCheckout()};
  }
}

//select all days for a given item
function selectAllDaysForItem(itemID){
  let itemDays = document.getElementById(itemID +'Days').getElementsByTagName('day');


  for(var i = 0; i < itemDays.length; i++){

    if(!itemDays[i].classList.contains('selected')) 
      itemDays[i].classList.add('selected');
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