//custom order request page js

//on click for send btn
function sendMessage(){	
	//hide form
	document.getElementById('customOrderForm').style.display = 'none';

	//show message
	document.getElementById('sentConfirmMessage').style.display = 'flex';

	//show back and home btns
	document.getElementById('sentNavBtns').style.display = 'flex';

}

function backToCustomerOrder(){
	//hide form
	document.getElementById('customOrderForm').style.display = 'block';

	//show message
	document.getElementById('sentConfirmMessage').style.display = 'none';

	//show back and home btns
	document.getElementById('sentNavBtns').style.display = 'none';
}