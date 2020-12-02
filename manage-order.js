//js for manage order

function openSendPassContainer(){
  document.getElementById('sendPasswordContainer').style.display = 'flex';
  document.getElementById('dim').style.display = 'block';
}

function closeSendPassContainer(){
  document.getElementById('sendPasswordContainer').style.display = 'none';
  document.getElementById('dim').style.display = 'none';
}


//show manage orders area
function showManageOrdersArea(){
  document.getElementById('manageOrdersArea').style.display = 'flex';
}
//hide login area
function hideLoginArea(){
  document.getElementById('signInArea').style.display = 'none';
}


//login...
function login(){
  if(true){
    hideLoginArea();
    showManageOrdersArea();
  }
}
