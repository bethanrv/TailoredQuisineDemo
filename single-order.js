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


//show next week days for order schedule
function showNextWeekDays(){
	//get next week from db


	//design eg....
	document.getElementById('week12-13Head').style.display = 'flex';
	document.getElementById('week12-13Days').style.display = 'flex';

}


//user input - validate all fields
function initUserInfoFormValidation(){

	let nameField = document.getElementById('userInputName').oninput = () => {validateInfoForm()};
	let emailField = document.getElementById('userInputEmail').oninput = () => {validateInfoForm()};
	let phoneField = document.getElementById('userInputPhone').oninput = () => {};
	let addressField = document.getElementById('userInputAddress').oninput = () => {validateInfoForm()};





	
}


var inputCount = 0;
function validateInfoForm(){
	inputCount++;

	if(inputCount >= 3){
		let nameField = document.getElementById('userInputName').value;
		let emailField = document.getElementById('userInputEmail').value;
		let phoneField = document.getElementById('userInputPhone').value;
		let addressField = document.getElementById('userInputAddress').value;

		if(nameField.length > 0){
			if(nameField.split(' ').length < 2) return 'invalid name: too short';
		}
		else return 'invalid: no name';

		if(emailField.length > 0){
			if(!(emailField.includes('@') && emailField.includes('.'))) return 'invlaid email'
		}
		else return 'invalid: no email'

		if(!addressField.length > 0){
			return 'invalid: no address';
		}

		//still here? valid! - show new btn
		document.getElementById('infoFormNextBtn').style.display = 'block';
	}
}


let reviewEditStatus = false;
function reviewEditOrderSchedule(day){
	
	if(reviewEditStatus){
		document.getElementById('reviewEditOrderscheduleBtn').innerHTML = 'Edit';
		document.getElementById('reviewEditDaySelection').style.display = 'none';
		reviewEditStatus = !reviewEditStatus;
	}
	else{
		document.getElementById('reviewEditOrderscheduleBtn').innerHTML = 'Done';	
		document.getElementById('reviewEditDaySelection').style.display = 'block';
		if(day == 'Monday'){
			document.getElementsByClassName('reviewDaySelectorMon')[0].classList.add("selected");
		}
		else if(day == 'Wednesday'){
			document.getElementsByClassName('reviewDaySelectorWed')[0].classList.add("selected");
		}
		else if(day == 'Friday'){
			document.getElementsByClassName('reviewDaySelectorFri')[0].classList.add("selected");
		}
		reviewEditStatus = !reviewEditStatus;
	}




}