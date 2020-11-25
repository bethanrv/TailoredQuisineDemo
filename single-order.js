//navigate to checkout
function navigateToCheckout(){

	//close menu items
	closeMenuItems();

	hideCart();

	//hide bottom checkout prompt
	document.getElementById('checkoutPromptBottom').style.display = 'none';

	document.getElementById('checkoutPrompt').style.display = 'none';
	document.getElementById('dim').style.display = 'none';




	//open checkout header
	document.getElementById('checkoutHeader').style.display = 'flex';

	//checkout cart items
	document.getElementById('checkoutCartItems').style.display = 'flex';

}

//close menu items
function closeMenuItems(){
	document.getElementById('menuHeader').style.display = 'none';
	document.getElementById('soupSelection').style.display = 'none';
	document.getElementById('pastaSelection').style.display = 'none';

}

//navigate back to menu items
function navigateBackToMenu(){
	document.getElementById('menuHeader').style.display = 'flex';
	document.getElementById('soupSelection').style.display = 'flex';
	document.getElementById('pastaSelection').style.display = 'flex';
	document.getElementById('checkoutPromptBottom').style.display = 'flex';

	document.getElementById('checkoutHeader').style.display = 'none';

	document.getElementById('checkoutCartItems').style.display = 'none';
}

//close checkout areas
function closeCheckoutAreas(){
	//open checkout header
	document.getElementById('checkoutHeader').style.display = 'none';

	//checkout cart items
	document.getElementById('checkoutCartItems').style.display = 'none';
}

//navigate to schedule order
function navigateToScheduleOrder(){

	//checkout cart items
	document.getElementById('checkoutCartItems').style.display = 'none';
	document.getElementById('checkoutScheduleOrder').style.display = 'flex';

}

//navigate back to schedule order
function navigateBackToScheduleOrder(){
	document.getElementById('userInfoInputArea').style.display = 'none';
	document.getElementById('checkoutScheduleOrder').style.display = 'flex';
}

//navigate back to items
function navigateBackToCartItems(){
	document.getElementById('checkoutScheduleOrder').style.display = 'none';
	document.getElementById('checkoutCartItems').style.display = 'flex';
}

//navigate to user info input
function navigateToUserInfoInput(){
	document.getElementById('checkoutScheduleOrder').style.display = 'none';
	document.getElementById('userInfoInputArea').style.display = 'flex';
}

//navigate to billing info input
function navigateToBillingInfoInput(){
	document.getElementById('userInfoInputArea').style.display = 'none';
	document.getElementById('billingInfoInput').style.display = 'flex';
}

//navigate back to user info input
function navigateBackToUserInfoInput(){
	document.getElementById('userInfoInputArea').style.display = 'flex';
	document.getElementById('billingInfoInput').style.display = 'none';
}

//navigate to review order
function navigateToReviewOrder(){
	document.getElementById('orderReviewArea').style.display = 'flex';
	document.getElementById('billingInfoInput').style.display = 'none';
}

//navigate back to billin info inpit
function navigateBackToBillingInfoInput(){
	document.getElementById('billingInfoInput').style.display = 'flex';
	document.getElementById('orderReviewArea').style.display = 'none';
}

//navigate to order details area
function navigateToOrderDetailsArea(){
	document.getElementById('orderDetailsArea').style.display = 'flex';
	document.getElementById('orderReviewArea').style.display = 'none';
}